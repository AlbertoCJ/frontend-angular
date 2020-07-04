import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Zeror } from '../../entities/algorithms/zeror/zeror';
import { SelectItem } from 'primeng/api/selectitem';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-algorithm-zeror',
  templateUrl: './algorithm-zeror.component.html',
  styleUrls: ['./algorithm-zeror.component.css']
})
export class ZerorComponent implements OnInit {

  zerorForm: FormGroup;
  zeror: Zeror;
  btnRestart = true;

  optionsValidation: SelectItem[];

  @Input('zeror') set setZeror(zeror: Zeror) {
    if (zeror) {
      this.zerorForm.patchValue({
        validation: zeror.config.validation,
        validationNum: zeror.config.validationNum
      });
      this.zeror = zeror;
    }
  }

  @Output() changeZeror = new EventEmitter<Zeror>();

  constructor(private fb: FormBuilder,
              public translate: TranslateService) {
    this.initForm();
    this.zeror = new Zeror();
    this.optionsValidation = [
      { label: 'Cross Validation', value: 'CrossValidation' },
      { label: 'Hold-Out', value: 'Hold-Out' }
    ];
   }

  ngOnInit() {
  }

  emitForm() {
    this.zeror.config.validation = this.zerorForm.value.validation;
    this.zeror.config.validationNum = this.zerorForm.value.validationNum.toString();
    this.changeZeror.emit(this.zeror);
  }

  initForm() {
    this.zerorForm = this.fb.group({
      validation: ['CrossValidation'],
      validationNum: ['10']
    });
    // Form change emit
    this.zerorForm.valueChanges.subscribe(data => {
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
