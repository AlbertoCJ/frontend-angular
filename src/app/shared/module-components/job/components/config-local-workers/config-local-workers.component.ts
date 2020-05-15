import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LocalWorkers } from '../../entities/workers/local-workers';
import { ZoneLaunch } from '../../enums/zoneLaunch.enum';
import { GlobalConfigService } from '../../../../../core/services/global-config/global-config.service';
import { DataAlgorithms } from '../../entities/data-algorithms';
import { LocalContainerService } from '../../../../../core/services/local-container/local-container.service';
import { HttpErrorService } from '../../../../../core/services/http-error/http-error.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-config-local-workers',
  templateUrl: './config-local-workers.component.html',
  styleUrls: ['./config-local-workers.component.css']
})
export class ConfigLocalWorkersComponent implements OnInit {

  containersForm: FormGroup;
  localWorkers: LocalWorkers;

  localContainers: any[];

  gcLocalContainers: any;
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
      this.petitionLocalContainer();
    }
  }

  @Output() emitLocalWorkers = new EventEmitter<LocalWorkers>();
  @Output() emitAllowNext = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder,
              private globalConfigService: GlobalConfigService,
              private localContainerService: LocalContainerService,
              private httpError: HttpErrorService,
              public translate: TranslateService) {
    this.containersForm = this.fb.group({
      numContainers: [0]
    });
    this.localWorkers = new LocalWorkers({ zoneLaunch: ZoneLaunch.LOCAL });
    this.gcLocalContainers = this.globalConfigService.getGlobalConfigSessionStorage().localContainer;
    this.maxSpinner = this.gcLocalContainers.numContMaxGlobal;
    // Form change emit
    this.containersForm.valueChanges.subscribe(data => {
      this.localWorkers.numContainers = this.containersForm.value.numContainers;
      this.emitLocalWorkers.emit(this.localWorkers);
    });
   }

  ngOnInit() {
    this.emitLocalWorkers.emit(this.localWorkers);
  }

  petitionLocalContainer() {
    this.localContainerService.getLocalContainers().subscribe(
      localContainer => {
        // Reiniciar
        this.containersFree = 0;
        this.containersBussy = 0;

        this.localContainers = localContainer;

        this.numContMaxGlobal = this.gcLocalContainers.numContMaxGlobal;

        this.containersActive = localContainer.length;
        this.containersInactive = this.numContMaxGlobal - this.containersActive;

        localContainer.forEach(contaier => {
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
    let valReturn = this.gcLocalContainers.numContMaxGlobal;
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
