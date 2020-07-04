import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LinearRegressionBagging } from '../../entities/algorithms/linear-regression-bagging/linear-regression-bagging';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-algorithm-linear-regression-bagging',
  templateUrl: './algorithm-linear-regression-bagging.component.html',
  styleUrls: ['./algorithm-linear-regression-bagging.component.css']
})
export class AlgorithmLinearRegressionBaggingComponent implements OnInit {

  linearRegressionBaggingForm: FormGroup;
  linearRegressionBagging: LinearRegressionBagging;
  btnRestart = true;

  optionsAttributeSelectionMethod: object[];
  optionsValidation: object[];

  @Input('linearRegressionBagging') set setLinearRegressionBagging(linearRegressionBagging: LinearRegressionBagging) {
    if (linearRegressionBagging) {
      this.linearRegressionBaggingForm.patchValue({
        bagSizePercent: linearRegressionBagging.config.bagSizePercent,
        batchSize: linearRegressionBagging.config.batchSize,
        numIterations: linearRegressionBagging.config.numIterations,
        attributeSelectionMethod: linearRegressionBagging.config.attributeSelectionMethod,
        eliminateColinearAttributes: linearRegressionBagging.config.eliminateColinearAttributes === '1' ? true : false,
        validation: linearRegressionBagging.config.validation,
        validationNum: linearRegressionBagging.config.validationNum
      });
      this.linearRegressionBagging = linearRegressionBagging;
    }
  }

  @Output() changeLinearRegressionBagging = new EventEmitter<LinearRegressionBagging>();

  constructor(private fb: FormBuilder,
              public translate: TranslateService) {
    this.initForm();
    this.linearRegressionBagging = new LinearRegressionBagging();
    this.optionsAttributeSelectionMethod = [
      { label: 'Attribute selection using M5´s method', value: 0 },
      { label: 'No attribute selection', value: 1 },
      { label: 'Selection using the Akaike information metric', value: 2 }
    ];
    this.optionsValidation = [
      { label: 'Cross Validation', value: 'CrossValidation' },
      { label: 'Hold-Out', value: 'Hold-Out' }
    ];
   }

  ngOnInit() {
  }

  emitForm() {
    this.linearRegressionBagging.config.bagSizePercent = this.linearRegressionBaggingForm.value.bagSizePercent.toString();
    this.linearRegressionBagging.config.batchSize = this.linearRegressionBaggingForm.value.batchSize.toString();
    this.linearRegressionBagging.config.numIterations = this.linearRegressionBaggingForm.value.numIterations.toString();
    this.linearRegressionBagging.config.attributeSelectionMethod = this.linearRegressionBaggingForm.value.attributeSelectionMethod;
    // tslint:disable-next-line: max-line-length
    this.linearRegressionBagging.config.eliminateColinearAttributes = this.linearRegressionBaggingForm.value.eliminateColinearAttributes === true ? '1' : '0';
    this.linearRegressionBagging.config.validation = this.linearRegressionBaggingForm.value.validation;
    this.linearRegressionBagging.config.validationNum = this.linearRegressionBaggingForm.value.validationNum.toString();
    this.changeLinearRegressionBagging.emit(this.linearRegressionBagging);
  }

  initForm() {
    this.linearRegressionBaggingForm = this.fb.group({
      bagSizePercent: ['100'],
      batchSize: ['100'],
      numIterations: ['10'],
      attributeSelectionMethod: ['0'],
      eliminateColinearAttributes: [true],
      validation: ['CrossValidation'],
      validationNum: ['10']
    });
    // Form change emit
    this.linearRegressionBaggingForm.valueChanges.subscribe(data => {
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
