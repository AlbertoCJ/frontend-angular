import { Component, OnInit } from '@angular/core';
import { DockerService } from '../../../core/services/docker/docker.service';
import { Container } from '../../../core/entities/docker/container';

@Component({
  selector: 'app-controller-list-containers',
  templateUrl: './controller-list-containers.component.html',
  styleUrls: ['./controller-list-containers.component.css']
})
export class ControllerListContainersComponent implements OnInit {

  state: string;
  containers: Container[];

  constructor(private dockerService: DockerService) { }

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
      error => {
          console.log(error); // TODO: mostrar modal error.
      }
  );
  }

  removeContainer(id: string) {
    this.dockerService.removeContainer(id).subscribe(
      removed => {
        console.log('Eliminado correctamente'); // Mostrar mensaje esquina superior
        this.getContainers(this.state);
      },
      error => {
        console.log(error); // TODO: mostrar modal error.
      }
    );
  }

  startContainer(id: string) {
    this.dockerService.startContainer(id).subscribe(
      started => {
        console.log('Iniciado correctamente'); // Mostrar mensaje esquina superior
        this.getContainers(this.state);
      },
      error => {
        console.log(error); // TODO: mostrar modal error.
      }
    );
  }

  stopContainer(id: string) {
    this.dockerService.stopContainer(id).subscribe(
      stopped => {
        console.log('Parado correctamente'); // Mostrar mensaje esquina superior
        this.getContainers(this.state);
      },
      error => {
        console.log(error); // TODO: mostrar modal error.
      }
    );
  }

}
