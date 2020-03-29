import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Steps } from '../../enums/steps.enum';
import { Dataset } from '../../../datasets/entities/dataset';

@Component({
  selector: 'app-controller-setect-dataset',
  templateUrl: './controller-setect-dataset.component.html',
  styleUrls: ['./controller-setect-dataset.component.css']
})
export class ControllerSetectDatasetComponent implements OnInit {

  datasetSelected: Dataset;
  showView: number; // 1 = Subir y seleccionar, 2 = seleccionar existente

  @Input() set dataset(dataset: Dataset) {
    if (dataset) {
      this.datasetSelected = dataset;
    }
  }

  @Output() emitStep = new EventEmitter<number>();
  @Output() emitDataset = new EventEmitter<Dataset>();

  constructor() { }

  ngOnInit() {
  }

  setDatasetSelected(dataset: Dataset) {
    this.datasetSelected = dataset;
    this.showView = undefined;
    this.emitDataset.emit(this.datasetSelected);
  }

  clearDataset() {
    this.datasetSelected = undefined;
  }

  btnNextClicked() {
    this.emitStep.emit(Steps.ALGORITHM);
  }

}
