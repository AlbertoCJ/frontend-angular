import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormDataset, Dataset } from '../../entities';
import { DatasetService } from '../../../../../core/services/dataset/dataset.service';
import { MessageService } from 'primeng/api';
import { AlertService } from '../../../../../core/services/alert/alert.service';
import { HttpErrorService } from '../../../../../core/services/http-error/http-error.service';



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

  constructor( private datasetService: DatasetService,
               private messageService: MessageService,
               private alertService: AlertService,
               private httpError: HttpErrorService) {
    this.formDataset = new FormDataset();
  }

  ngOnInit() {
  }

  clearError() {
    this.showError = false;
    this.textError = '';
  }

  uploadDataset(event, form) {
    this.clearError();
    if (this.formDataset && this.formDataset.description === '') {
      this.showError = true;
      this.textError = 'Escribe una descipción'; // TODO: Traducir
    } else {
      this.formDataset.file = event.files[0];
      this.datasetService.upload(this.formDataset).subscribe( (resp: Dataset) => {
        this.dataset = resp;
        this.emitDataset.emit(resp);
        this.clearAll();
        form.clear();
        this.formDataset = new FormDataset();
        this.messageService.add({severity: 'success', detail: 'Guardado correctamente'});
      }, (err) => {
        if (err.error && err.error.err && err.error.err.code === 11000) {
          this.alertService.setAlert('Alerta', `Ya existe esa descripción.`); // Traducir
        } else {
          this.httpError.checkError(err, 'Alerta', 'Error al guardar dataset'); // TODO: Traducir
        }
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
