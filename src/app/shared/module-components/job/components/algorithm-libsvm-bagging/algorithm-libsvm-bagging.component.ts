import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LibsvmBagging } from '../../entities/algorithms/libsvm-bagging/libsvm-bagging';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-algorithm-libsvm-bagging',
  templateUrl: './algorithm-libsvm-bagging.component.html',
  styleUrls: ['./algorithm-libsvm-bagging.component.css']
})
export class AlgorithmLibsvmBaggingComponent implements OnInit {

  libsvmBaggingForm: FormGroup;
  libsvmBagging: LibsvmBagging;
  btnRestart = true;

  optionsSvmType: SelectItem[];
  optionsKernelType: SelectItem[];
  optionsValidation: SelectItem[];

  @Input('libsvmBagging') set setLibsvmBagging(libsvmBagging: LibsvmBagging) {
    if (libsvmBagging) {
      this.libsvmBaggingForm.patchValue({
        bagSizePercent: libsvmBagging.config.bagSizePercent,
        batchSize: libsvmBagging.config.batchSize,
        numIterations: libsvmBagging.config.numIterations,
        svmType: libsvmBagging.config.svmType,
        coef0: libsvmBagging.config.coef0,
        cost: libsvmBagging.config.cost,
        degree: libsvmBagging.config.degree,
        eps: libsvmBagging.config.eps,
        gamma: libsvmBagging.config.gamma,
        kernelType: libsvmBagging.config.kernelType,
        loss: libsvmBagging.config.loss,
        normalize: libsvmBagging.config.normalize === 'true' ? true : false,
        nu: libsvmBagging.config.nu,
        probabilityEstimates: libsvmBagging.config.probabilityEstimates === 'true' ? true : false,
        shrinking: libsvmBagging.config.shrinking === 'true' ? true : false,
        validation: libsvmBagging.config.validation,
        validationNum: libsvmBagging.config.validationNum
      });
      this.libsvmBagging = libsvmBagging;
    }
  }

  @Output() changeLibsvm = new EventEmitter<LibsvmBagging>();

  constructor(private fb: FormBuilder) {
    this.initForm();
    this.libsvmBagging = new LibsvmBagging();
    this.optionsSvmType = [
      { label: 'epsilon-SVR', value: 3 }, // TODO: Traducir
      { label: 'nu-SVR', value: 4 } // TODO: Traducir
    ];
    this.optionsKernelType = [
      { label: 'linear: u\'*v', value: 0 }, // TODO: Traducir
      { label: 'polynomial: (gamma*u\'*v + coef0)^degree2', value: 1 }, // TODO: Traducir
      { label: 'radial basis function: exp(-gamma*|u-v|^2)', value: 2 }, // TODO: Traducir
      { label: 'sigmoid: tanh()gamma*u\'*v + coef0)', value: 3 } // TODO: Traducir
    ];
    this.optionsValidation = [
      { label: 'Cross Validation', value: 'CrossValidation' }, // TODO: Traducir
      { label: 'Hold-Out', value: 'Hold-Out' } // TODO: Traducir
    ];
   }

  ngOnInit() {
  }

  emitForm() {
    this.libsvmBagging.config.bagSizePercent = this.libsvmBaggingForm.value.bagSizePercent.toString();
    this.libsvmBagging.config.batchSize = this.libsvmBaggingForm.value.batchSize.toString();
    this.libsvmBagging.config.numIterations = this.libsvmBaggingForm.value.numIterations.toString();
    this.libsvmBagging.config.svmType = this.libsvmBaggingForm.value.svmType.toString();
    this.libsvmBagging.config.coef0 = this.libsvmBaggingForm.value.coef0.toString();
    this.libsvmBagging.config.cost = this.libsvmBaggingForm.value.cost.toString();
    this.libsvmBagging.config.degree = this.libsvmBaggingForm.value.degree.toString();
    this.libsvmBagging.config.eps = this.libsvmBaggingForm.value.eps.toString();
    this.libsvmBagging.config.gamma = this.libsvmBaggingForm.value.gamma.toString();
    this.libsvmBagging.config.kernelType = this.libsvmBaggingForm.value.kernelType.toString();
    this.libsvmBagging.config.loss = this.libsvmBaggingForm.value.loss.toString();
    this.libsvmBagging.config.normalize = this.libsvmBaggingForm.value.normalize === true ? 'true' : 'false';
    this.libsvmBagging.config.nu = this.libsvmBaggingForm.value.nu.toString();
    this.libsvmBagging.config.probabilityEstimates = this.libsvmBaggingForm.value.probabilityEstimates === true ? 'true' : 'false';
    this.libsvmBagging.config.shrinking = this.libsvmBaggingForm.value.shrinking === true ? 'true' : 'false';
    this.libsvmBagging.config.validation = this.libsvmBaggingForm.value.validation;
    this.libsvmBagging.config.validationNum = this.libsvmBaggingForm.value.validationNum.toString();
    this.changeLibsvm.emit(this.libsvmBagging);
  }

  initForm() {
    this.libsvmBaggingForm = this.fb.group({
      bagSizePercent: ['100'],
      batchSize: ['100'],
      numIterations: ['10'],
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
    this.libsvmBaggingForm.valueChanges.subscribe(data => {
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
