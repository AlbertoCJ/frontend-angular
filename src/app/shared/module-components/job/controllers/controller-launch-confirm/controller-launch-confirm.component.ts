import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Steps } from '../../enums/steps.enum';
import { StringifyOptions } from 'querystring';
import { Dataset } from '../../../datasets/entities';
import { LocalWorkers } from '../../entities/workers/local-workers';

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

  @Input() dataset: Dataset;
  @Input() listAlgorithms: any;
  @Input() dataWorkers: LocalWorkers;

  @Output() emitStep = new EventEmitter<number>();

  constructor() {
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
    // TODO: Primero comprobar si es local o aws

    // SI ES LOCAL
    // TODO: Lanzar petición para crear contenedores, almacenar los contenedores con el usuario que los crea.
    // TODO: Si se reciben correctamente, se esperara X segundos por cada contenedor creado antes de lanzar los algoritmos.
    // TODO: Peticion que gestiona los algoritmos y los asigna a contenedores, etc.
  }

}
