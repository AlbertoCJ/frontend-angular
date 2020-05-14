import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormDataset, Dataset } from '../../entities';
import { DatasetService } from '../../../../../core/services/dataset/dataset.service';
import { MessageService } from 'primeng/api';
import { AlertService } from '../../../../../core/services/alert/alert.service';
import { HttpErrorService } from '../../../../../core/services/http-error/http-error.service';
import { TranslateService } from '@ngx-translate/core';



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
               private httpError: HttpErrorService,
               public translate: TranslateService) {
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
      this.textError = this.translate.instant('controllerFormDataset.textError');
    } else {
      this.formDataset.file = event.files[0];
      this.datasetService.upload(this.formDataset).subscribe( (resp: Dataset) => {
        this.dataset = resp;
        this.emitDataset.emit(resp);
        this.clearAll();
        form.clear();
        this.formDataset = new FormDataset();
        this.messageService.add({severity: 'success', detail: this.translate.instant('menssageToast.updateCorrectly')});
      }, (err) => {
        if (err.error && err.error.err && err.error.err.code === 11000) {
          this.alertService.setAlert(
            this.translate.instant('alerts.alert'),
            this.translate.instant('controllerFormDataset.msgAlertErrorExistDescription'));
        } else {
          this.httpError.checkError(err,
            this.translate.instant('alerts.alert'),
            this.translate.instant('controllerFormDataset.msgAlertErrorSave'));
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
