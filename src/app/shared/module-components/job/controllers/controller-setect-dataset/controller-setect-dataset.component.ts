import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Steps } from '../../enums/steps.enum';
import { Dataset } from '../../../datasets/entities/dataset';
import { FormJobData } from '../../entities/form-job-data/form-job-data';

@Component({
  selector: 'app-controller-setect-dataset',
  templateUrl: './controller-setect-dataset.component.html',
  styleUrls: ['./controller-setect-dataset.component.css']
})
export class ControllerSetectDatasetComponent implements OnInit {

  formJobData: FormJobData;
  showError = false;
  textError: string;
  datasetSelected: Dataset;
  showView: number; // 1 = Subir y seleccionar, 2 = seleccionar existente

  @Output() emitStep = new EventEmitter<number>();
  @Output() emitDataset = new EventEmitter<Dataset>();
  @Output() emitFormJobData = new EventEmitter<FormJobData>();

  constructor() {
    this.formJobData = new FormJobData();
    this.textError = 'Debe escribir un nombre.'; // TODO: Traducir
   }

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
    if (this.formJobData.name === '') {
      this.showError = true;
    } else {
      this.showError = false;
      this.emitStep.emit(Steps.ALGORITHM);
      this.emitFormJobData.emit(this.formJobData);
    }
  }

}
