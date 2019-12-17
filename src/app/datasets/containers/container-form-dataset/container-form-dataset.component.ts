import { Component, OnInit } from '@angular/core';
import { FormDataset } from '../../../core/entities/dataset/form-dataset';
import { DatasetService } from '../../../core/services/dataset/dataset.service';

@Component({
  selector: 'app-container-form-dataset',
  templateUrl: './container-form-dataset.component.html',
  styleUrls: ['./container-form-dataset.component.css']
})
export class ContainerFormDatasetComponent implements OnInit {

  formDataset: FormDataset;
  textError: string;
  showError = false;

  constructor( private dataset: DatasetService) {
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
      this.dataset.upload(this.formDataset).subscribe( resp => {
        console.log(resp);
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
      });
    }
  }

  removeFile() {
    this.clearError();
  }

  clearAll() {
    this.formDataset.description = '';
    this.clearError();
  }

}
