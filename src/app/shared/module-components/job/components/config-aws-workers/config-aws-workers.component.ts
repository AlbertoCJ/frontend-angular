import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AwsWorkers } from '../../entities/workers/aws-workers';
import { DataAlgorithms } from '../../entities/data-algorithms';
import { GlobalConfigService } from '../../../../../core/services/global-config/global-config.service';
import { HttpErrorService } from '../../../../../core/services/http-error/http-error.service';
import { TranslateService } from '@ngx-translate/core';
import { ZoneLaunch } from '../../enums/zoneLaunch.enum';
import { AwsContainerService } from '../../../../../core/services/aws-container/aws-container.service';

@Component({
  selector: 'app-config-aws-workers',
  templateUrl: './config-aws-workers.component.html',
  styleUrls: ['./config-aws-workers.component.css']
})
export class ConfigAwsWorkersComponent implements OnInit {

  containersForm: FormGroup;
  awsWorkers: AwsWorkers;

  awsContainers: any[];

  gcAwsContainers: any;
  containersActive = 0;
  containersInactive = 0;
  numAlgorithms = 0;
  numContMaxGlobal = 0;
  containersFree = 0;
  containersBussy = 0;
  listAlgorithms: DataAlgorithms;

  maxSpinner: number;

  @Input('listAlgorithms') set setListAlgorithms(algorithms: DataAlgorithms) {
    if (algorithms) {
      let numAlgorithms = 0;
      for (const key in algorithms) {
          if (algorithms.hasOwnProperty(key)) {
              if (algorithms[key].algorithm) {
                numAlgorithms++;
              }
          }
      }
      this.numAlgorithms = numAlgorithms;
      this.petitionAwsContainer();
    }
  }

  @Output() emitAwsWorkers = new EventEmitter<AwsWorkers>();
  @Output() emitAllowNext = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder,
              private globalConfigService: GlobalConfigService,
              private awsContainerService: AwsContainerService,
              private httpError: HttpErrorService,
              public translate: TranslateService) {
    this.containersForm = this.fb.group({
      numContainers: [0]
    });
    this.awsWorkers = new AwsWorkers({ zoneLaunch: ZoneLaunch.AWS });
    this.gcAwsContainers = this.globalConfigService.getGlobalConfigSessionStorage().awsContainer;
    this.maxSpinner = this.gcAwsContainers.numContMaxGlobal;
    // Form change emit
    this.containersForm.valueChanges.subscribe(data => {
      this.awsWorkers.numContainers = this.containersForm.value.numContainers;
      this.emitAwsWorkers.emit(this.awsWorkers);
    });
   }

  ngOnInit() {
    this.emitAwsWorkers.emit(this.awsWorkers);
  }

  petitionAwsContainer() {
    this.awsContainerService.getAwsContainers().subscribe(
      awsContainer => {
        // Reiniciar
        this.containersFree = 0;
        this.containersBussy = 0;

        this.awsContainers = awsContainer;

        this.numContMaxGlobal = this.gcAwsContainers.numContMaxGlobal;

        this.containersActive = awsContainer.length;
        this.containersInactive = this.numContMaxGlobal - this.containersActive;

        awsContainer.forEach(contaier => {
          if (contaier.User_id === '' && contaier.Job_id === '' && contaier.Working === false) {
            this.containersFree++;
          } else if (contaier.Working === true) {
            this.containersBussy++;
          }
        });

        this.allowNext();

        this.maxSpinner = this.maxSelectContainer();

      },
      err => {
        this.httpError.checkError(err,
          this.translate.instant('alerts.alert'),
          this.translate.instant('configLocalWorkers.msgAlertErrorGetContainersLocal'));
      }
    );
  }

  maxSelectContainer() {
    let valReturn = this.gcAwsContainers.numContMaxGlobal;
    if (this.containersInactive > this.numAlgorithms) {
      valReturn = this.numAlgorithms;
    } else {
      valReturn = this.containersInactive;
    }
    return valReturn;
  }

  allowNext() {
    if (this.containersFree > 0) {
      this.emitAllowNext.emit(true);
    } else if (this.containersInactive <= 0) {
      this.emitAllowNext.emit(true);
    } else {
      this.emitAllowNext.emit(false);
    }
  }

}
