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
      this.globalConfig.showLists.dashboard.showLatestsJobs = this.globalConfigForm.value.showLatestsJobs;
      this.globalConfig.showLists.dashboard.showJobsRunning = this.globalConfigForm.value.showJobsRunning;
      this.globalConfig.showLists.dataset.showDatasets = this.globalConfigForm.value.showDatasets;
      this.globalConfig.showLists.job.showJobs = this.globalConfigForm.value.showJobs;
      console.log(this.globalConfig);

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
