import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormDataset, Dataset } from '../../entities';
import { DatasetService } from '../../../core/services/dataset/dataset.service';

@Component({
  selector: 'app-controller-form-dataset',
  templateUrl: './controller-form-dataset.component.html',
  styleUrls: ['./controller-form-dataset.component.css']
})
export class ControllerFormDatasetComponent implements OnInit {

  formDataset: FormDataset;
  textError: string;
  showError = false;
  dataset: Dataset;

  @Output() emitDataset = new EventEmitter<Dataset>();

  constructor( private datasetService: DatasetService) {
    this.formDataset = new FormDataset();
  }

  ngOnInit() {
  }

  clearError() {
    this.showError = false;
    this.textError = '';
  }

  uploadDataset(event) {
    this.clearError();
    if (this.formDataset && this.formDataset.description === '') {
      this.showError = true;
      this.textError = 'Escibe una descipción';
    } else {
      this.formDataset.file = event.files[0];
      this.datasetService.upload(this.formDataset).subscribe( (resp: Dataset) => {
        console.log(resp);
        this.dataset = resp;
        this.emitDataset.emit(resp);
        // this.generateDataset(resp);
        // console.log(resp.dataset._id);
        this.clearAll();
        this.formDataset = new FormDataset();
      }, (err) => {
        console.log(err);
        // if (err.status === 401) {
        //   this.textError = 'Email y/o contraseña erronea.';
        //   this.showError = true;
        // } else {
        //   alert(`Error inesperado: ${ err.status }`); // TODO: Ver como mostrar alertas
        // }
        alert(`Error inesperado: ${ err.status }`); // TODO: Ver como mostrar alertas
      });
    }
  }

  removeFile() {
    this.clearError();
  }

  clearAll() {
    // this.formDataset.description = '';
    this.formDataset = new FormDataset();
    this.clearError();
  }

}
