import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Steps } from '../../enums/steps.enum';
import { Dataset } from '../../../shared/module-components/datasets/entities/dataset';

@Component({
  selector: 'app-controller-setect-dataset',
  templateUrl: './controller-setect-dataset.component.html',
  styleUrls: ['./controller-setect-dataset.component.css']
})
export class ControllerSetectDatasetComponent implements OnInit {

  btnNextDisabled: boolean;
  datasetSelected: Dataset;
  showView: number; // 1 = Subir y seleccionar, 2 = seleccionar existente

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
