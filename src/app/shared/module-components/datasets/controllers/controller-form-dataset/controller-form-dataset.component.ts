import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormDataset, Dataset } from '../../entities';
import { DatasetService } from '../../../../../core/services/dataset/dataset.service';
import { MessageService } from 'primeng/api';
import { AlertService } from '../../../../../core/services/alert/alert.service';



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
               private alertService: AlertService) {
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
      this.textError = 'Escibe una descipción'; // TODO: Traducir
    } else {
      this.formDataset.file = event.files[0];
      this.datasetService.upload(this.formDataset).subscribe( (resp: Dataset) => {
        console.log(resp);
        this.dataset = resp;
        this.emitDataset.emit(resp);
        this.clearAll();
        form.clear();
        this.formDataset = new FormDataset();
        this.messageService.add({severity: 'success', detail: 'Guardado correctamente'});
      }, (err) => {
        this.alertService.setAlertShowMore('Alerta', 'Error al guardar dataset', err.message);
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
