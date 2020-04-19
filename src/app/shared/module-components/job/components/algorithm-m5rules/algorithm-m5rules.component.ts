import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { M5rules } from '../../entities/algorithms/m5rules/m5rules';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-algorithm-m5rules',
  templateUrl: './algorithm-m5rules.component.html',
  styleUrls: ['./algorithm-m5rules.component.css']
})
export class AlgorithmM5rulesComponent implements OnInit {

  m5rulesForm: FormGroup;
  m5rules: M5rules;
  btnRestart = true;

  optionsValidation: SelectItem[];

  @Input('m5rules') set setM5rules(m5rules: M5rules) {
    if (m5rules) {
      this.m5rulesForm.patchValue({
        unpruned: m5rules.config.unpruned === '1' ? true : false,
        useUnsmoothed: m5rules.config.useUnsmoothed === '1' ? true : false,
        minNumInstances: m5rules.config.minNumInstances,
        buildRegressionTree: m5rules.config.buildRegressionTree === '1' ? true : false,
        validation: m5rules.config.validation,
        validationNum: m5rules.config.validationNum
      });
      this.m5rules = m5rules;
    }
  }

  @Output() changeM5rules = new EventEmitter<M5rules>();

  constructor(private fb: FormBuilder) {
    this.initForm();
    this.m5rules = new M5rules();
    this.optionsValidation = [
      { label: 'Cross Validation', value: 'CrossValidation' }, // TODO: Traducir
      { label: 'Hold-Out', value: 'Hold-Out' } // TODO: Traducir
    ];
   }

  ngOnInit() {
  }

  emitForm() {
    this.m5rules.config.unpruned = this.m5rulesForm.value.unpruned === true ? '1' : '0';
    this.m5rules.config.useUnsmoothed = this.m5rulesForm.value.useUnsmoothed === true ? '1' : '0';
    this.m5rules.config.minNumInstances = this.m5rulesForm.value.minNumInstances.toString();
    this.m5rules.config.buildRegressionTree = this.m5rulesForm.value.buildRegressionTree === true ? '1' : '0';
    this.m5rules.config.validation = this.m5rulesForm.value.validation;
    this.m5rules.config.validationNum = this.m5rulesForm.value.validationNum.toString();
    this.changeM5rules.emit(this.m5rules);
  }

  initForm() {
    this.m5rulesForm = this.fb.group({
      unpruned: [false],
      useUnsmoothed: [false],
      minNumInstances: ['4'],
      buildRegressionTree: [false],
      validation: ['CrossValidation'],
      validationNum: ['10']
    });
    // Form change emit
    this.m5rulesForm.valueChanges.subscribe(data => {
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
