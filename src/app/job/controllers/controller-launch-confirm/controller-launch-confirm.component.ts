import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Steps } from '../../enums/steps.enum';
import { StringifyOptions } from 'querystring';

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
  }

}
