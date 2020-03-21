import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Steps } from '../../enums/steps.enum';

@Component({
  selector: 'app-controller-launch-confirm',
  templateUrl: './controller-launch-confirm.component.html',
  styleUrls: ['./controller-launch-confirm.component.css']
})
export class ControllerLaunchConfirmComponent implements OnInit {

  btnPrevDisabled: boolean;
  btnNextDisabled: boolean;

  @Output() emitStep = new EventEmitter<number>();

  constructor() {
    this.btnPrevDisabled = false;
    this.btnNextDisabled = false;
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
