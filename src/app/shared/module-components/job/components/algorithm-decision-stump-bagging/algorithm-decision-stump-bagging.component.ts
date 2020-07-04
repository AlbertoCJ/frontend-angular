import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DecisionStumpBagging } from '../../entities/algorithms/decision-stump-bagging/decision-stump-bagging';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-algorithm-decision-stump-bagging',
  templateUrl: './algorithm-decision-stump-bagging.component.html',
  styleUrls: ['./algorithm-decision-stump-bagging.component.css']
})
export class AlgorithmDecisionStumpBaggingComponent implements OnInit {

  decisionStumpBaggingForm: FormGroup;
  decisionStumpBagging: DecisionStumpBagging;
  btnRestart = true;

  optionsValidation: object[];

  @Input('decisionStumpBagging') set setDecisionStumpBagging(decisionStumpBagging: DecisionStumpBagging) {
    if (decisionStumpBagging) {
      this.decisionStumpBaggingForm.patchValue({
        bagSizePercent: decisionStumpBagging.config.bagSizePercent,
        batchSize: decisionStumpBagging.config.batchSize,
        numIterations: decisionStumpBagging.config.numIterations,
        validation: decisionStumpBagging.config.validation,
        validationNum: decisionStumpBagging.config.validationNum
      });
      this.decisionStumpBagging = decisionStumpBagging;
    }
  }

  @Output() changeDecisionStumpBagging = new EventEmitter<DecisionStumpBagging>();

  constructor(private fb: FormBuilder,
              public translate: TranslateService) {
    this.initForm();
    this.decisionStumpBagging = new DecisionStumpBagging();
    this.optionsValidation = [
      { label: 'Cross Validation', value: 'CrossValidation' },
      { label: 'Hold-Out', value: 'Hold-Out' }
    ];
   }

  ngOnInit() {
  }

  emitForm() {
    this.decisionStumpBagging.config.bagSizePercent = this.decisionStumpBaggingForm.value.bagSizePercent.toString();
    this.decisionStumpBagging.config.batchSize = this.decisionStumpBaggingForm.value.batchSize.toString();
    this.decisionStumpBagging.config.numIterations = this.decisionStumpBaggingForm.value.numIterations.toString();
    this.decisionStumpBagging.config.validation = this.decisionStumpBaggingForm.value.validation;
    this.decisionStumpBagging.config.validationNum = this.decisionStumpBaggingForm.value.validationNum.toString();
    this.changeDecisionStumpBagging.emit(this.decisionStumpBagging);
  }

  initForm() {
    this.decisionStumpBaggingForm = this.fb.group({
      bagSizePercent: ['100'],
      batchSize: ['100'],
      numIterations: ['10'],
      validation: ['CrossValidation'],
      validationNum: ['10']
    });
    // Form change emit
    this.decisionStumpBaggingForm.valueChanges.subscribe(data => {
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
