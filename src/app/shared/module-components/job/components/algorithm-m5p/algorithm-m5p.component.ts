import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { M5p } from '../../entities/algorithms/m5p/m5p';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SelectItem } from 'primeng/api/selectitem';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-algorithm-m5p',
  templateUrl: './algorithm-m5p.component.html',
  styleUrls: ['./algorithm-m5p.component.css']
})
export class AlgorithmM5pComponent implements OnInit {

  m5pForm: FormGroup;
  m5p: M5p;
  btnRestart = true;

  optionsValidation: SelectItem[];

  @Input('m5p') set setM5p(m5p: M5p) {
    if (m5p) {
      this.m5pForm.patchValue({
        unpruned: m5p.config.unpruned === '1' ? true : false,
        useUnsmoothed: m5p.config.useUnsmoothed === '1' ? true : false,
        minNumInstances: m5p.config.minNumInstances,
        buildRegressionTree: m5p.config.buildRegressionTree === '1' ? true : false,
        validation: m5p.config.validation,
        validationNum: m5p.config.validationNum
      });
      this.m5p = m5p;
    }
  }

  @Output() changeM5p = new EventEmitter<M5p>();

  constructor(private fb: FormBuilder,
              public translate: TranslateService) {
    this.initForm();
    this.m5p = new M5p();
    this.optionsValidation = [
      { label: 'Cross Validation', value: 'CrossValidation' },
      { label: 'Hold-Out', value: 'Hold-Out' }
    ];
   }

  ngOnInit() {
  }

  emitForm() {
    this.m5p.config.unpruned = this.m5pForm.value.unpruned === true ? '1' : '0';
    this.m5p.config.useUnsmoothed = this.m5pForm.value.useUnsmoothed === true ? '1' : '0';
    this.m5p.config.minNumInstances = this.m5pForm.value.minNumInstances.toString();
    this.m5p.config.buildRegressionTree = this.m5pForm.value.buildRegressionTree === true ? '1' : '0';
    this.m5p.config.validation = this.m5pForm.value.validation;
    this.m5p.config.validationNum = this.m5pForm.value.validationNum.toString();
    this.changeM5p.emit(this.m5p);
  }

  initForm() {
    this.m5pForm = this.fb.group({
      unpruned: [false],
      useUnsmoothed: [false],
      minNumInstances: ['4'],
      buildRegressionTree: [false],
      validation: ['CrossValidation'],
      validationNum: ['10']
    });
    // Form change emit
    this.m5pForm.valueChanges.subscribe(data => {
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
