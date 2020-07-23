import { Component, OnInit } from '@angular/core';

import { GlobalConfig } from '../../entities/global-config';
import { GlobalConfigService } from '../../../core/services/global-config/global-config.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../core/services/validators/validators.service';
import { HttpErrorService } from '../../../core/services/http-error/http-error.service';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-controller-global-config',
  templateUrl: './controller-global-config.component.html',
  styleUrls: ['./controller-global-config.component.css']
})
export class ControllerGlobalConfigComponent implements OnInit {

  // Confirm
  isConfirmActive = false;

  globalConfigForm: FormGroup;
  globalConfig: GlobalConfig;

  constructor(private globalConfigService: GlobalConfigService,
              private fb: FormBuilder,
              private validatorsService: ValidatorsService,
              private httpError: HttpErrorService,
              private messageService: MessageService,
              public translate: TranslateService) {
    this.initForm();
  }

  ngOnInit() {
    this.updateForm();
  }

  initForm() {
    this.globalConfigForm = this.fb.group({
      numContMaxGlobal: [10, [ Validators.min(2) ]],
      localActivated: [true],
      numContMaxGlobalAws: [10, [ Validators.min(2) ]],
      awsActivated: [true],
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
      localActivated: this.globalConfig.localContainer.localActivated,
      numContMaxGlobalAws: this.globalConfig.awsContainer.numContMaxGlobal,
      awsActivated: this.globalConfig.awsContainer.awsActivated,
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
      showLatestsJobs: this.globalConfig.showLists.home.showLatestsJobs,
      showJobsRunning: this.globalConfig.showLists.home.showJobsRunning,
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
      this.globalConfig.localContainer.localActivated = this.globalConfigForm.value.localActivated;

      this.globalConfig.awsContainer.numContMaxGlobal = this.globalConfigForm.value.numContMaxGlobalAws;
      this.globalConfig.awsContainer.awsActivated = this.globalConfigForm.value.awsActivated;

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

      this.globalConfig.showLists.home.showLatestsJobs = this.globalConfigForm.value.showLatestsJobs;
      this.globalConfig.showLists.home.showJobsRunning = this.globalConfigForm.value.showJobsRunning;
      this.globalConfig.showLists.dataset.showDatasets = this.globalConfigForm.value.showDatasets;
      this.globalConfig.showLists.job.showJobs = this.globalConfigForm.value.showJobs;

      this.globalConfigService.updateGlobalConfig(this.globalConfig).subscribe( (resp: GlobalConfig) => {
        this.messageService.add({severity: 'success', detail: this.translate.instant('menssageToast.updateCorrectly')});
      }, (err) => {
          this.httpError.checkError(err,
            this.translate.instant('alerts.alert'),
            this.translate.instant('controllerGlobalConfig.messageErrorUpdated'));
      });
    }
  }

  restoreConfirm() {
    this.isConfirmActive = true;
  }

  resetDefaultValues() {
    this.globalConfigService.restoreGlobalConfig(this.globalConfig).subscribe( (resp: GlobalConfig) => {
      this.updateForm();
      this.messageService.add({severity: 'success', detail: this.translate.instant('controllerGlobalConfig.messageSuccessRestore')});
    }, (err) => {
        this.httpError.checkError(err,
          this.translate.instant('alerts.alert'),
          this.translate.instant('controllerGlobalConfig.messageErrorRestore'));
    });
    this.isConfirmActive = false;
  }

  cancelConfirm() {
    this.isConfirmActive = false;
  }

}
