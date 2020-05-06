import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Steps } from '../../enums/steps.enum';
import { StringifyOptions } from 'querystring';
import { Dataset } from '../../../datasets/entities';
import { LocalWorkers } from '../../entities/workers/local-workers';
import { FormJobData } from '../../entities/form-job-data/form-job-data';
import { JobService } from '../../../../../core/services/job/job.service';
import { DockerService } from '../../../../../core/services/docker/docker.service';
import { AlertService } from '../../../../../core/services/alert/alert.service';
import { HttpErrorService } from '../../../../../core/services/http-error/http-error.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controller-launch-confirm',
  templateUrl: './controller-launch-confirm.component.html',
  styleUrls: ['./controller-launch-confirm.component.css']
})
export class ControllerLaunchConfirmComponent implements OnInit {

  btnPrevDisabled: boolean;
  btnLaunchDisabled: boolean;
  btnLaunchLabel: string;
  btnLaunchStyleClass: string;

  @Input() formJobData: FormJobData;
  @Input() dataset: Dataset;
  @Input() listAlgorithms: any;
  @Input() dataWorkers: LocalWorkers;

  @Output() emitStep = new EventEmitter<number>();

  constructor(private jobService: JobService,
              private dockerService: DockerService,
              private alertService: AlertService,
              private httpError: HttpErrorService,
              private router: Router) {
    this.btnPrevDisabled = false;
    this.btnLaunchDisabled = false;
    this.btnLaunchLabel = 'Launch'; // TODO: traducir
    this.btnLaunchStyleClass = 'ui-button-success';
   }

  ngOnInit() {
  }

  btnPrevClicked() {
    this.emitStep.emit(Steps.WORKERS);
  }

  btnLaunchClicked() {
    alert('Lanzado');

    this.dockerService.runContainers(this.dataWorkers.numContainers).subscribe( // this.containers
      respContainers => {
        // this.listDataset = listDataset;
        console.log(respContainers.containers);
        alert('Container');
        this.jobService.launchJob(this.formJobData, this.dataset, this.listAlgorithms, respContainers.containers).subscribe(
          respJob => {
            // this.listDataset = listDataset;
            console.log(respJob);
            this.router.navigate([`job/${respJob.id}`]);
          },
          err => {
            // TODO: Gestionar bien los errores
            // this.httpError.checkError(err, 'Alerta', 'Error al borrar dataset'); // TODO: Traducir
            // this.alertService.setAlertShowMore('Alerta', 'Error al obtener listado de datasets', err.message);
            console.log(err);
          }
        );

      },
      err => {
        console.log(err);
        switch (err.status) {
          case 600:
            this.alertService.setAlertShowMore('Alerta', 'Error al generar contenedores.', err.error.error.message);
            break;
          case 601:
            this.alertService.setAlertShowMore('Alerta', 'Error al generar contenedores.', err.error.error.message);
            break;
          case 602:
            this.alertService.setAlertShowMore('Alerta', 'Error al generar contenedores.', err.error.error.message);
            break;
          default:
            this.alertService.setAlertShowMore('Alerta', 'Error al generar contenedores.', err.message);
            break;
        }
      }
    );



    // TODO: Primero comprobar si es local o aws

    // SI ES LOCAL
    // TODO: Lanzar petición para crear contenedores, almacenar los contenedores con el usuario que los crea.
    // TODO: Si se reciben correctamente, se esperara X segundos por cada contenedor creado antes de lanzar los algoritmos.
    // TODO: Peticion que gestiona los algoritmos y los asigna a contenedores, etc.
  }

}
