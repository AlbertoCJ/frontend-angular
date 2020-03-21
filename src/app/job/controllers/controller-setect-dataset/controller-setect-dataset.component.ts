import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Steps } from '../../enums/steps.enum';

@Component({
  selector: 'app-controller-setect-dataset',
  templateUrl: './controller-setect-dataset.component.html',
  styleUrls: ['./controller-setect-dataset.component.css']
})
export class ControllerSetectDatasetComponent implements OnInit {

  btnNextDisabled: boolean;

  @Output() emitStep = new EventEmitter<number>();

  constructor() {
    this.btnNextDisabled = false;
  }

  ngOnInit() {
  }

  btnNextClicked() {
    this.emitStep.emit(Steps.ALGORITHM);
  }

}
