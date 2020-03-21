import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Steps } from '../../enums/steps.enum';

@Component({
  selector: 'app-controller-launch-worker',
  templateUrl: './controller-launch-worker.component.html',
  styleUrls: ['./controller-launch-worker.component.css']
})
export class ControllerLaunchWorkerComponent implements OnInit {

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
    this.emitStep.emit(Steps.ALGORITHM);
  }

  btnNextClicked() {
    this.emitStep.emit(Steps.CONFIRM);
  }

}
