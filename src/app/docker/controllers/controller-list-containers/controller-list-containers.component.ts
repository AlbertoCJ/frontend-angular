import { Component, OnInit } from '@angular/core';
import { DockerService } from '../../../core/services/docker/docker.service';
import { Container } from '../../entities';
import { MessageService } from 'primeng/api';
import { HttpErrorService } from '../../../core/services/http-error/http-error.service';

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
              private httpError: HttpErrorService) { }

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
          this.httpError.checkError(err, 'Alerta', 'Error al obtener contenedores.'); // TODO: Traducir
      }
  );
  }

  removeContainer(id: string) {
    this.dockerService.removeContainer(id).subscribe(
      removed => {
        this.messageService.add({severity: 'success', detail: 'Eliminado correctamente.'}); // TODO: Traducir
        this.getContainers(this.state);
      },
      err => {
        this.httpError.checkError(err, 'Alerta', 'Error al eliminar contenedor.'); // TODO: Traducir
      }
    );
  }

  startContainer(id: string) {
    this.dockerService.startContainer(id).subscribe(
      started => {
        this.messageService.add({severity: 'success', detail: 'Iniciado correctamente.'}); // TODO: Traducir
        this.getContainers(this.state);
      },
      err => {
        this.httpError.checkError(err, 'Alerta', 'Error al iniciar contenedor.'); // TODO: Traducir
      }
    );
  }

  stopContainer(id: string) {
    this.dockerService.stopContainer(id).subscribe(
      stopped => {
        this.messageService.add({severity: 'success', detail: 'Parado correctamente.'}); // TODO: Traducir
        this.getContainers(this.state);
      },
      err => {
        this.httpError.checkError(err, 'Alerta', 'Error al parar contenedor.'); // TODO: Traducir
      }
    );
  }

}
