import { Component, OnInit } from '@angular/core';
import { DockerService } from '../../../core/services/docker/docker.service';
import { Container } from '../../entities';
import { MessageService } from 'primeng/api';
import { HttpErrorService } from '../../../core/services/http-error/http-error.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-controller-list-containers',
  templateUrl: './controller-list-containers.component.html',
  styleUrls: ['./controller-list-containers.component.css']
})
export class ControllerListContainersComponent implements OnInit {

  state: string;
  containers: Container[];

  constructor(private dockerService: DockerService,
              private messageService: MessageService,
              private httpError: HttpErrorService,
              public translate: TranslateService) { }

  ngOnInit() {
  }

  stateChanged(state: string) {
    this.state = state;
    this.getContainers(state);
  }

  getContainers(state: string) {
    this.dockerService.getContainers(state).subscribe(
      containers => {
        this.containers = containers;
      },
      err => {
          this.httpError.checkError(err,
            this.translate.instant('alerts.alert'),
            this.translate.instant('controllerListContainers.messageErrorGetContainers'));
      }
  );
  }

  removeContainer(id: string) {
    this.dockerService.removeContainer(id).subscribe(
      removed => {
        this.messageService.add({severity: 'success', detail: this.translate.instant('menssageToast.removedCorrectly')});
      },
      err => {
        this.httpError.checkError(err,
          this.translate.instant('alerts.alert'),
          this.translate.instant('controllerListContainers.messageErrorRemoveContainer'));
      }
    );
  }

  startContainer(id: string) {
    this.dockerService.startContainer(id).subscribe(
      started => {
        this.messageService.add({severity: 'success', detail: this.translate.instant('menssageToast.startedCorrectly')});
        this.getContainers(this.state);
      },
      err => {
        this.httpError.checkError(err,
          this.translate.instant('alerts.alert'),
          this.translate.instant('controllerListContainers.messageErrorStartContainer'));
      }
    );
  }

  stopContainer(id: string) {
    this.dockerService.stopContainer(id).subscribe(
      stopped => {
        this.messageService.add({severity: 'success', detail: this.translate.instant('menssageToast.stoppedCorrectly')});
        this.getContainers(this.state);
      },
      err => {
        this.httpError.checkError(err,
          this.translate.instant('alerts.alert'),
          this.translate.instant('controllerListContainers.messageErrorStopContainer'));
      }
    );
  }

}
