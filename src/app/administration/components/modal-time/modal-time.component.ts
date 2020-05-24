import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../core/entities/user/user';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-modal-time',
  templateUrl: './modal-time.component.html',
  styleUrls: ['./modal-time.component.css']
})
export class ModalTimeComponent implements OnInit {

  isAlertActive: boolean;
  isModalActive: boolean;

  @Input('isModalActive') set setIsModalActive(value: boolean) {
    if (value) {
      this.isAlertActive = true;
      this.isModalActive = true;
    } else {
      this.isAlertActive = false;
      this.isModalActive = false;
    }
  }

  @Input() user: User;

  @Output() closedModalTime = new EventEmitter<boolean>();

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

  formCancel() {
    this.closedModalTime.emit(false);
    this.isAlertActive = false;
  }

  close() {
    this.isModalActive = false;
  }

}
