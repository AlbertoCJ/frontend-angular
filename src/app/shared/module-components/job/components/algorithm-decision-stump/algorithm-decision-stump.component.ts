import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DecisionStump } from '../../entities/algorithms/decision-stump/decision-stump';
import { SelectItem } from 'primeng/api/selectitem';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-algorithm-decision-stump',
  templateUrl: './algorithm-decision-stump.component.html',
  styleUrls: ['./algorithm-decision-stump.component.css']
})
export class AlgorithmDecisionStumpComponent implements OnInit {

  decisionStumpForm: FormGroup;
  decisionStump: DecisionStump;
  btnRestart = true;

  optionsValidation: SelectItem[];

  @Input('decisionStump') set setDecisionStump(decisionStump: DecisionStump) {
    if (decisionStump) {
      this.decisionStumpForm.patchValue({
        validation: decisionStump.config.validation,
        validationNum: decisionStump.config.validationNum
      });
      this.decisionStump = decisionStump;
    }
  }

  @Output() changeDecisionStump = new EventEmitter<DecisionStump>();

  constructor(private fb: FormBuilder,
              public translate: TranslateService) {
    this.initForm();
    this.decisionStump = new DecisionStump();
    this.optionsValidation = [
      { label: 'Cross Validation', value: 'CrossValidation' },
      { label: 'Hold-Out', value: 'Hold-Out' }
    ];
   }

  ngOnInit() {
  }

  emitForm() {
    this.decisionStump.config.validation = this.decisionStumpForm.value.validation;
    this.decisionStump.config.validationNum = this.decisionStumpForm.value.validationNum.toString();
    this.changeDecisionStump.emit(this.decisionStump);
  }

  initForm() {
    this.decisionStumpForm = this.fb.group({
      validation: ['CrossValidation'],
      validationNum: ['10']
    });
    // Form change emit
    this.decisionStumpForm.valueChanges.subscribe(data => {
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
