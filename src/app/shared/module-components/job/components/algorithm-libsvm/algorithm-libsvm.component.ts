import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Libsvm } from '../../entities/algorithms/libsvm/libsvm';
import { SelectItem } from 'primeng/api/selectitem';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-algorithm-libsvm',
  templateUrl: './algorithm-libsvm.component.html',
  styleUrls: ['./algorithm-libsvm.component.css']
})
export class AlgorithmLibsvmComponent implements OnInit {

  libsvmForm: FormGroup;
  libsvm: Libsvm;
  btnRestart = true;

  optionsSvmType: SelectItem[];
  optionsKernelType: SelectItem[];
  optionsValidation: SelectItem[];

  @Input('libsvm') set setLibsvm(libsvm: Libsvm) {
    if (libsvm) {
      this.libsvmForm.patchValue({
        svmType: libsvm.config.svmType,
        coef0: libsvm.config.coef0,
        cost: libsvm.config.cost,
        degree: libsvm.config.degree,
        eps: libsvm.config.eps,
        gamma: libsvm.config.gamma,
        kernelType: libsvm.config.kernelType,
        loss: libsvm.config.loss,
        normalize: libsvm.config.normalize === 'true' ? true : false,
        nu: libsvm.config.nu,
        probabilityEstimates: libsvm.config.probabilityEstimates === 'true' ? true : false,
        shrinking: libsvm.config.shrinking === 'true' ? true : false,
        validation: libsvm.config.validation,
        validationNum: libsvm.config.validationNum
      });
      this.libsvm = libsvm;
    }
  }

  @Output() changeLibsvm = new EventEmitter<Libsvm>();

  constructor(private fb: FormBuilder,
              public translate: TranslateService) {
    this.initForm();
    this.libsvm = new Libsvm();
    this.optionsSvmType = [
      { label: 'epsilon-SVR', value: 3 },
      { label: 'nu-SVR', value: 4 }
    ];
    this.optionsKernelType = [
      { label: 'linear: u\'*v', value: 0 },
      { label: 'polynomial: (gamma*u\'*v + coef0)^degree2', value: 1 },
      { label: 'radial basis function: exp(-gamma*|u-v|^2)', value: 2 },
      { label: 'sigmoid: tanh()gamma*u\'*v + coef0)', value: 3 }
    ];
    this.optionsValidation = [
      { label: 'Cross Validation', value: 'CrossValidation' },
      { label: 'Hold-Out', value: 'Hold-Out' }
    ];
   }

  ngOnInit() {
  }

  emitForm() {
    this.libsvm.config.svmType = this.libsvmForm.value.svmType.toString();
    this.libsvm.config.coef0 = this.libsvmForm.value.coef0.toString();
    this.libsvm.config.cost = this.libsvmForm.value.cost.toString();
    this.libsvm.config.degree = this.libsvmForm.value.degree.toString();
    this.libsvm.config.eps = this.libsvmForm.value.eps.toString();
    this.libsvm.config.gamma = this.libsvmForm.value.gamma.toString();
    this.libsvm.config.kernelType = this.libsvmForm.value.kernelType.toString();
    this.libsvm.config.loss = this.libsvmForm.value.loss.toString();
    this.libsvm.config.normalize = this.libsvmForm.value.normalize === true ? 'true' : 'false';
    this.libsvm.config.nu = this.libsvmForm.value.nu.toString();
    this.libsvm.config.probabilityEstimates = this.libsvmForm.value.probabilityEstimates === true ? 'true' : 'false';
    this.libsvm.config.shrinking = this.libsvmForm.value.shrinking === true ? 'true' : 'false';
    this.libsvm.config.validation = this.libsvmForm.value.validation;
    this.libsvm.config.validationNum = this.libsvmForm.value.validationNum.toString();
    this.changeLibsvm.emit(this.libsvm);
  }

  initForm() {
    this.libsvmForm = this.fb.group({
      svmType: ['3'],
      coef0: ['0'],
      cost: ['1.0'],
      degree: ['3'],
      eps: ['0.001'],
      gamma: ['0.0'],
      kernelType: ['2'],
      loss: ['0.1'],
      normalize: [false],
      nu: ['0.5'],
      probabilityEstimates: [false],
      shrinking: [true],
      validation: ['CrossValidation'],
      validationNum: ['10']
    });
    // Form change emit
    this.libsvmForm.valueChanges.subscribe(data => {
      this.emitForm();
      this.btnRestart = false;
    });
  }

  restart() {
    this.initForm();
    this.emitForm();
    this.btnRestart = true;
  }

}
