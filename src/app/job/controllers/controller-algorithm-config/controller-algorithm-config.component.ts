import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Steps } from '../../enums/steps.enum';

@Component({
  selector: 'app-controller-algorithm-config',
  templateUrl: './controller-algorithm-config.component.html',
  styleUrls: ['./controller-algorithm-config.component.css']
})
export class ControllerAlgorithmConfigComponent implements OnInit {

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
    this.emitStep.emit(Steps.DATASET);
  }

  btnNextClicked() {
    this.emitStep.emit(Steps.WORKERS);
  }

}
