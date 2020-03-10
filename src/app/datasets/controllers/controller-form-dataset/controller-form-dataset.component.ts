import { Component, OnInit } from '@angular/core';
import { FormDataset } from '../../../core/entities/dataset/form-dataset';
import { DatasetService } from '../../../core/services/dataset/dataset.service';
import { Dataset } from '../../../core/entities/dataset/dataset';

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
