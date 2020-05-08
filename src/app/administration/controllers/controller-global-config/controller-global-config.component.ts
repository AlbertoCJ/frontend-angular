import { Component, OnInit } from '@angular/core';

import { GlobalConfig } from '../../entities/global-config';
import { GlobalConfigService } from '../../../core/services/global-config/global-config.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../core/services/validators/validators.service';
import { HttpErrorService } from '../../../core/services/http-error/http-error.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-controller-global-config',
  templateUrl: './controller-global-config.component.html',
  styleUrls: ['./controller-global-config.component.css']
})
export class ControllerGlobalConfigComponent implements OnInit {

  // Confirm
  isConfirmActive = false;
  titleConfirm = 'Aviso'; // TODO: Traducir
  messageConfirm = 'Se restablecerán los valores por defecto. ¿Estás seguro?'; // TODO: Traducir

  globalConfigForm: FormGroup;
  globalConfig: GlobalConfig;

  constructor(private globalConfigService: GlobalConfigService,
              private fb: FormBuilder,
              private validatorsService: ValidatorsService,
              private httpError: HttpErrorService,
              private messageService: MessageService) {
    this.initForm();
  }

  ngOnInit() {
    this.updateForm();
  }

  initForm() {
    this.globalConfigForm = this.fb.group({
      numContMaxGlobal: [10, [ Validators.min(2) ]],
      numContMaxUser: [4, [ Validators.min(1) ]],
      linearRegression: [true],
      linearRegressionBagging: [true],
      IBk: [true],
      ZeroR: [true],
      M5P: [true],
      M5PBagging: [true],
      M5Rules: [true],
      DecisionStump: [true],
      DecisionStumpBagging: [true],
      Libsvm: [true],
      LibsvmBagging: [true],
      showLatestsJobs: [5, [ Validators.min(2), Validators.max(10) ]],
      showJobsRunning: [2, [ Validators.min(2), Validators.max(6) ]],
      showDatasets: [8, [ this.validatorsService.numDatasetShowValid ]],
      showJobs: [4, [ Validators.min(2), Validators.max(20) ]]
    });
  }

  updateForm() {
    this.globalConfig = this.globalConfigService.getGlobalConfigSessionStorage();
    this.globalConfigForm.patchValue({
      numContMaxGlobal: this.globalConfig.localContainer.numContMaxGlobal,
      numContMaxUser: this.globalConfig.localContainer.numContMaxUser,
      linearRegression: this.globalConfig.algorithms.linearRegression,
      linearRegressionBagging: this.globalConfig.algorithms.linearRegressionBagging,
      IBk: this.globalConfig.algorithms.IBk,
      ZeroR: this.globalConfig.algorithms.ZeroR,
      M5P: this.globalConfig.algorithms.M5P,
      M5PBagging: this.globalConfig.algorithms.M5PBagging,
      M5Rules: this.globalConfig.algorithms.M5Rules,
      DecisionStump: this.globalConfig.algorithms.DecisionStump,
      DecisionStumpBagging: this.globalConfig.algorithms.DecisionStumpBagging,
      Libsvm: this.globalConfig.algorithms.Libsvm,
      LibsvmBagging: this.globalConfig.algorithms.LibsvmBagging,
      showLatestsJobs: this.globalConfig.showLists.dashboard.showLatestsJobs,
      showJobsRunning: this.globalConfig.showLists.dashboard.showJobsRunning,
      showDatasets: this.globalConfig.showLists.dataset.showDatasets,
      showJobs: this.globalConfig.showLists.job.showJobs
    });
  }

  btnSaveClicked() {

    if ( this.globalConfigForm.invalid ) {
      return Object.values( this.globalConfigForm.controls ).forEach( control => {
        if ( control instanceof FormGroup ) {
          // tslint:disable-next-line: no-shadowed-variable
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
      });
    } else {
      this.globalConfig.localContainer.numContMaxGlobal = this.globalConfigForm.value.numContMaxGlobal;
      this.globalConfig.localContainer.numContMaxUser = this.globalConfigForm.value.numContMaxUser;

      this.globalConfig.algorithms.linearRegression = this.globalConfigForm.value.linearRegression;
      this.globalConfig.algorithms.linearRegressionBagging = this.globalConfigForm.value.linearRegressionBagging;
      this.globalConfig.algorithms.IBk = this.globalConfigForm.value.IBk;
      this.globalConfig.algorithms.ZeroR = this.globalConfigForm.value.ZeroR;
      this.globalConfig.algorithms.M5P = this.globalConfigForm.value.M5P;
      this.globalConfig.algorithms.M5PBagging = this.globalConfigForm.value.M5PBagging;
      this.globalConfig.algorithms.M5Rules = this.globalConfigForm.value.M5Rules;
      this.globalConfig.algorithms.DecisionStump = this.globalConfigForm.value.DecisionStump;
      this.globalConfig.algorithms.DecisionStumpBagging = this.globalConfigForm.value.DecisionStumpBagging;
      this.globalConfig.algorithms.Libsvm = this.globalConfigForm.value.Libsvm;
      this.globalConfig.algorithms.LibsvmBagging = this.globalConfigForm.value.LibsvmBagging;

      this.globalConfig.showLists.dashboard.showLatestsJobs = this.globalConfigForm.value.showLatestsJobs;
      this.globalConfig.showLists.dashboard.showJobsRunning = this.globalConfigForm.value.showJobsRunning;
      this.globalConfig.showLists.dataset.showDatasets = this.globalConfigForm.value.showDatasets;
      this.globalConfig.showLists.job.showJobs = this.globalConfigForm.value.showJobs;

      this.globalConfigService.updateGlobalConfig(this.globalConfig).subscribe( (resp: GlobalConfig) => {
        this.messageService.add({severity: 'success', detail: 'Actualizado correctamente'}); // TODO: Traducir
      }, (err) => {
          this.httpError.checkError(err, 'Alerta', 'Error al actualizar configiración'); // TODO: Traducir
      });
    }
  }

  restoreConfirm() {
    this.isConfirmActive = true;
  }

  resetDefaultValues() {
    this.globalConfigService.restoreGlobalConfig(this.globalConfig).subscribe( (resp: GlobalConfig) => {
      this.updateForm();
      this.messageService.add({severity: 'success', detail: 'Restablecido correctamente'}); // TODO: Traducir
    }, (err) => {
        this.httpError.checkError(err, 'Alerta', 'Error al restablecer configiración'); // TODO: Traducir
    });
    this.isConfirmActive = false;
  }

  cancelConfirm() {
    this.isConfirmActive = false;
  }

}
