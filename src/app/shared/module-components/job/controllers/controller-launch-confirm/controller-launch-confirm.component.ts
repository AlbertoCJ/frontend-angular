import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Steps } from '../../enums/steps.enum';
import { StringifyOptions } from 'querystring';
import { Dataset } from '../../../datasets/entities';
import { LocalWorkers } from '../../entities/workers/local-workers';
import { FormJobData } from '../../entities/job-data/form-job-data';
import { JobService } from '../../../../../core/services/job/job.service';

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

  constructor(private jobService: JobService) {
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
    this.jobService.launchJob(this.formJobData, this.dataset, this.listAlgorithms, 'container').subscribe( // this.containers
      resp => {
        // this.listDataset = listDataset;
        console.log(resp);
      },
      err => {
        // this.alertService.setAlertShowMore('Alerta', 'Error al obtener listado de datasets', err.message);
        console.log(err);
      }
    );
    // TODO: Primero comprobar si es local o aws

    // SI ES LOCAL
    // TODO: Lanzar petición para crear contenedores, almacenar los contenedores con el usuario que los crea.
    // TODO: Si se reciben correctamente, se esperara X segundos por cada contenedor creado antes de lanzar los algoritmos.
    // TODO: Peticion que gestiona los algoritmos y los asigna a contenedores, etc.
  }

}
