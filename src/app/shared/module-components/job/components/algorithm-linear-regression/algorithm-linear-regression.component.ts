import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LinearRegression } from '../../entities/algorithms/linear-regression/linear-regression';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-algorithm-linear-regression',
  templateUrl: './algorithm-linear-regression.component.html',
  styleUrls: ['./algorithm-linear-regression.component.css']
})
export class AlgorithmLinearRegressionComponent implements OnInit {

  linearRegressionForm: FormGroup;
  linearRegression: LinearRegression;
  btnRestart = true;

  optionsAttributeSelectionMethod: SelectItem[];
  optionsValidation: SelectItem[];

  @Input('linearRegression') set setLinearRegression(linearRegression: LinearRegression) {
    if (linearRegression) {
      this.linearRegressionForm.patchValue({
        attributeSelectionMethod: linearRegression.config.attributeSelectionMethod,
        eliminateColinearAttributes: linearRegression.config.eliminateColinearAttributes === '1' ? true : false,
        validation: linearRegression.config.validation,
        validationNum: linearRegression.config.validationNum
      });
      this.linearRegression = linearRegression;
    }
  }

  @Output() changeLinearRegression = new EventEmitter<LinearRegression>();

  constructor(private fb: FormBuilder) {
    this.initForm();
    this.linearRegression = new LinearRegression();
    this.optionsAttributeSelectionMethod = [
      { label: 'Attribute selection using M5´s method', value: 0 }, // TODO: Traducir
      { label: 'No attribute selection', value: 1 }, // TODO: Traducir
      { label: 'Selection using the Akaike information metric', value: 2 } // TODO: Traducir
    ];
    this.optionsValidation = [
      { label: 'Cross Validation', value: 'CrossValidation' }, // TODO: Traducir
      { label: 'Hold-Out', value: 'Hold-Out' } // TODO: Traducir
    ];
   }

  ngOnInit() {
  }

  emitForm() {
    this.linearRegression.config.attributeSelectionMethod = this.linearRegressionForm.value.attributeSelectionMethod;
    // tslint:disable-next-line: max-line-length
    this.linearRegression.config.eliminateColinearAttributes = this.linearRegressionForm.value.eliminateColinearAttributes === true ? '1' : '0';
    this.linearRegression.config.validation = this.linearRegressionForm.value.validation;
    this.linearRegression.config.validationNum = this.linearRegressionForm.value.validationNum.toString();
    this.changeLinearRegression.emit(this.linearRegression);
  }

  initForm() {
    this.linearRegressionForm = this.fb.group({
      attributeSelectionMethod: ['0'],
      eliminateColinearAttributes: [true],
      validation: ['CrossValidation'],
      validationNum: ['10']
    });
    // Form change emit
    this.linearRegressionForm.valueChanges.subscribe(data => {
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
