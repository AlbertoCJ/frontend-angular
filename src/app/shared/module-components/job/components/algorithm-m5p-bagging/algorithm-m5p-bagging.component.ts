import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { M5pBagging } from '../../entities/algorithms/m5p-bagging/m5p-bagging';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-algorithm-m5p-bagging',
  templateUrl: './algorithm-m5p-bagging.component.html',
  styleUrls: ['./algorithm-m5p-bagging.component.css']
})
export class AlgorithmM5pBaggingComponent implements OnInit {

  m5pBaggingForm: FormGroup;
  m5pBagging: M5pBagging;
  btnRestart = true;

  optionsValidation: SelectItem[];

  @Input('m5pBagging') set setM5p(m5pBagging: M5pBagging) {
    if (m5pBagging) {
      this.m5pBaggingForm.patchValue({
        bagSizePercent: m5pBagging.config.bagSizePercent,
        batchSize: m5pBagging.config.batchSize,
        numIterations: m5pBagging.config.numIterations,
        unpruned: m5pBagging.config.unpruned === '1' ? true : false,
        useUnsmoothed: m5pBagging.config.useUnsmoothed === '1' ? true : false,
        minNumInstances: m5pBagging.config.minNumInstances,
        buildRegressionTree: m5pBagging.config.buildRegressionTree === '1' ? true : false,
        validation: m5pBagging.config.validation,
        validationNum: m5pBagging.config.validationNum
      });
      this.m5pBagging = m5pBagging;
    }
  }

  @Output() changeM5pBagging = new EventEmitter<M5pBagging>();

  constructor(private fb: FormBuilder) {
    this.initForm();
    this.m5pBagging = new M5pBagging();
    this.optionsValidation = [
      { label: 'Cross Validation', value: 'CrossValidation' }, // TODO: Traducir
      { label: 'Hold-Out', value: 'Hold-Out' } // TODO: Traducir
    ];
   }

  ngOnInit() {
  }

  emitForm() {
    this.m5pBagging.config.bagSizePercent = this.m5pBaggingForm.value.bagSizePercent.toString();
    this.m5pBagging.config.batchSize = this.m5pBaggingForm.value.batchSize.toString();
    this.m5pBagging.config.numIterations = this.m5pBaggingForm.value.numIterations.toString();
    this.m5pBagging.config.unpruned = this.m5pBaggingForm.value.unpruned === true ? '1' : '0';
    this.m5pBagging.config.useUnsmoothed = this.m5pBaggingForm.value.useUnsmoothed === true ? '1' : '0';
    this.m5pBagging.config.minNumInstances = this.m5pBaggingForm.value.minNumInstances.toString();
    this.m5pBagging.config.buildRegressionTree = this.m5pBaggingForm.value.buildRegressionTree === true ? '1' : '0';
    this.m5pBagging.config.validation = this.m5pBaggingForm.value.validation;
    this.m5pBagging.config.validationNum = this.m5pBaggingForm.value.validationNum.toString();
    this.changeM5pBagging.emit(this.m5pBagging);
  }

  initForm() {
    this.m5pBaggingForm = this.fb.group({
      bagSizePercent: ['100'],
      batchSize: ['100'],
      numIterations: ['10'],
      unpruned: [false],
      useUnsmoothed: [false],
      minNumInstances: ['4'],
      buildRegressionTree: [false],
      validation: ['CrossValidation'],
      validationNum: ['10']
    });
    // Form change emit
    this.m5pBaggingForm.valueChanges.subscribe(data => {
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
