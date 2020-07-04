import { Component, OnInit } from '@angular/core';
import { DockerAwsService } from '../../../core/services/dockerAWS/docker-aws.service';
import { MessageService } from 'primeng/api';
import { HttpErrorService } from '../../../core/services/http-error/http-error.service';
import { TranslateService } from '@ngx-translate/core';
import { ContainerAws } from '../../entities/container-aws';

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
              public translate: TranslateService) { }

  ngOnInit() {
    this.getContainersAws();
  }

  getContainersAws() {
    this.dockerAwsService.getContainersAws().subscribe(
      containersAws => {
        this.containersAws = containersAws;
      },
      err => {
          this.httpError.checkError(err,
            this.translate.instant('alerts.alert'),
            this.translate.instant('controllerListContainers.messageErrorGetContainers'));
      }
    );
  }

  removeContainerAws(applicationName: string) {
    console.log(applicationName);
    this.dockerAwsService.removeContainerAws(applicationName).subscribe(
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
