import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Steps } from '../../enums/steps.enum';
import { Dataset } from '../../../datasets/entities';
import { LocalWorkers } from '../../entities/workers/local-workers';
import { FormJobData } from '../../entities/form-job-data/form-job-data';
import { JobService } from '../../../../../core/services/job/job.service';
import { DockerService } from '../../../../../core/services/docker/docker.service';
import { AlertService } from '../../../../../core/services/alert/alert.service';
import { HttpErrorService } from '../../../../../core/services/http-error/http-error.service';
import { Router } from '@angular/router';
import { DataAlgorithms } from '../../entities/data-algorithms';
import { TranslateService } from '@ngx-translate/core';
import { CapitalizePipe } from '../../../../../core/pipes/capitalize/capitalize.pipe';
import { SplitCamelCaseToStringPipe } from '../../../../../core/pipes/split-camel-case-to-string/split-camel-case-to-string.pipe';
import { ConfigParamBooleanPipe } from '../../../../../core/pipes/config-param-boolean/config-param-boolean.pipe';
import { AwsWorkers } from '../../entities/workers/aws-workers';
import { ZoneLaunch } from '../../enums/zoneLaunch.enum';
import { DockerAwsService } from '../../../../../core/services/dockerAWS/docker-aws.service';


@Component({
  selector: 'app-controller-launch-confirm',
  templateUrl: './controller-launch-confirm.component.html',
  styleUrls: ['./controller-launch-confirm.component.css']
})
export class ControllerLaunchConfirmComponent implements OnInit {

  btnPrevDisabled: boolean;
  btnLaunchDisabled: boolean;
  btnLaunchStyleClass: string;

  listAlgorithms: DataAlgorithms;
  dataAlgorithms: any[] = [];

  // Pipes
  capitalizePipe = new CapitalizePipe();
  splitCamelCaseToStringPipe = new SplitCamelCaseToStringPipe();
  configParamBooleanPipe = new ConfigParamBooleanPipe();

  @Input() formJobData: FormJobData;
  @Input() dataset: Dataset;
  @Input('listAlgorithms') set setListAlgorithms(listAlgorithms: DataAlgorithms) {
    if (listAlgorithms) {
      this.dataAlgorithms = [];
      this.listAlgorithms = listAlgorithms;
      for (const key in listAlgorithms) {
        if (listAlgorithms.hasOwnProperty(key)) {
          const value = listAlgorithms[key];

          if (value.algorithm) {
            const configs = value.algorithm.config;
            const configsParsed = [];
            for (const keyConf in configs) {
              if (configs.hasOwnProperty(keyConf)) {
                configsParsed.push(
                  {
                    label: this.splitCamelCaseToStringPipe.transform(this.capitalizePipe.transform(keyConf)),
                    value: this.configParamBooleanPipe.transform(keyConf, configs[keyConf])
                  });
              }
            }

            this.dataAlgorithms.push({ algorithmName: value.algorithm.name, configs: configsParsed });
          }
        }
      }
    }
  }
  @Input() dataWorkers: LocalWorkers | AwsWorkers;

  @Output() emitStep = new EventEmitter<number>();

  constructor(private jobService: JobService,
              private dockerService: DockerService,
              private dockerAwsService: DockerAwsService,
              private alertService: AlertService,
              private httpError: HttpErrorService,
              private router: Router,
              public translate: TranslateService) {
    this.btnPrevDisabled = false;
    this.btnLaunchDisabled = false;
    this.btnLaunchStyleClass = 'ui-button-success';
   }

  ngOnInit() {
  }

  btnPrevClicked() {
    this.emitStep.emit(Steps.WORKERS);
  }

  btnLaunchClicked() {
    // alert('Lanzado');

    // Check platform 'AWS' or 'LOCAL'
    if (this.dataWorkers.zoneLaunch === ZoneLaunch.AWS) {
      if (this.dataWorkers.numContainers > 0) {
        this.launchAwsContainers('AWS');
      } else if (this.dataWorkers.numContainers <= 0) {
        this.launchJob([], 'AWS');
      }
    } else {
      if (this.dataWorkers.numContainers > 0) {
        this.launchLocalContainers('LOCAL');
      } else if (this.dataWorkers.numContainers <= 0) {
        this.launchJob([], 'LOCAL');
      }
    }

  }

  async launchAwsContainers(platform: string) {
    const containersAWS = [];

    for (let i = 0; i < this.dataWorkers.numContainers; i++) {

      await this.dockerAwsService.createContainers()
        .then( (respContainer: any) => {
          containersAWS.push(respContainer.awsContainer);
        })
        .catch(err => {
          console.log(err);
        });

    }

    this.launchJob(containersAWS, platform);
  }

  launchLocalContainers(platform: string) {
    this.dockerService.runContainers(this.dataWorkers.numContainers).subscribe( // this.containers
      respContainers => {
        this.launchJob(respContainers.containers, platform);

      },
      err => {
        switch (err.status) {
          case 600:
            this.alertService.setAlertShowMore(this.translate.instant('alerts.alert'),
            this.translate.instant('controllerLaunchConfirm.msgAlertErrorGenerateContainers'),
              err.error.error.message);
            break;
          case 601:
            this.alertService.setAlertShowMore(this.translate.instant('alerts.alert'),
            this.translate.instant('controllerLaunchConfirm.msgAlertErrorGenerateContainers'),
              err.error.error.message);
            break;
          case 602:
            this.alertService.setAlertShowMore(this.translate.instant('alerts.alert'),
            this.translate.instant('controllerLaunchConfirm.msgAlertErrorGenerateContainers'),
              err.error.error.message);
            break;
          default:
            this.httpError.checkError(err,
              this.translate.instant('alerts.alert'),
              this.translate.instant('controllerLaunchConfirm.msgAlertErrorGenerateContainers'));
            break;
        }
      }
    );
  }

  launchJob(containers: any[], platform: string) {
    this.jobService.launchJob(this.formJobData, this.dataset, this.listAlgorithms, containers, platform).subscribe(
      respJob => {
        this.router.navigate([`job/${respJob.id}`]);
      },
      err => {
        this.httpError.checkError(err,
          this.translate.instant('alerts.alert'),
          this.translate.instant('controllerLaunchConfirm.msgAlertErrorLaunchJob'));
      }
    );
  }

}
