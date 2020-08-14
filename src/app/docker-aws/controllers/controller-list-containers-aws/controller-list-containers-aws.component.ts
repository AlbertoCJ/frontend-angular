import { Component, OnInit } from '@angular/core';
import { DockerAwsService } from '../../../core/services/dockerAWS/docker-aws.service';
import { MessageService } from 'primeng/api';
import { HttpErrorService } from '../../../core/services/http-error/http-error.service';
import { TranslateService } from '@ngx-translate/core';
import { ContainerAws } from '../../entities/container-aws';
import { AlertService } from '../../../core/services/alert/alert.service';

@Component({
  selector: 'app-controller-list-containers-aws',
  templateUrl: './controller-list-containers-aws.component.html',
  styleUrls: ['./controller-list-containers-aws.component.css']
})
export class ControllerListContainersAwsComponent implements OnInit {

  containersAws: ContainerAws[];

  constructor(private dockerAwsService: DockerAwsService,
              private messageService: MessageService,
              private httpError: HttpErrorService,
              public translate: TranslateService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.getContainersAws();
  }

  initiateContainer() {
    this.dockerAwsService.createContainers(true) // withoutUser = true
        .then( (respContainer: any) => {
          // containersAWS.push(respContainer.awsContainer);
          this.getContainersAws();
        })
        .catch(err => {
          if (err && err.error && err.error.err && err.error.err.statusCode === 403) {
            this.alertService.setAlertShowMore(this.translate.instant('alerts.alert'),
            this.translate.instant('controllerLaunchConfirm.msgAlertErrorGenerateContainers'),
            err.error.err.message);
          } else {
            this.alertService.setAlert(this.translate.instant('alerts.alert'),
            this.translate.instant('controllerListContainers.messageErrorStartContainer'));
          }

        });
  }

  getContainersAws() {
    this.dockerAwsService.getContainersAws().subscribe(
      containersAws => {
        this.containersAws = containersAws;
      },
      err => {
        if (err && err.error && err.error.err && err.error.err.statusCode === 403) {
          this.alertService.setAlertShowMore(this.translate.instant('alerts.alert'),
          this.translate.instant('controllerListContainers.messageErrorGetContainers'),
            err.error.err.message);
        } else {
          this.httpError.checkError(err,
          this.translate.instant('alerts.alert'),
          this.translate.instant('controllerListContainers.messageErrorGetContainers'));
        }
      }
    );
  }

  removeContainerAws(containerAws: ContainerAws) {
    this.dockerAwsService.removeContainerAws(containerAws.applicationName, containerAws.id).subscribe(
      removed => {
        this.getContainersAws();
        this.messageService.add({severity: 'success', detail: this.translate.instant('menssageToast.removedCorrectly')});
      },
      err => {
        this.httpError.checkError(err,
          this.translate.instant('alerts.alert'),
          this.translate.instant('controllerListContainers.messageErrorRemoveContainer'));
      }
    );
  }

}
