import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-controller-change-pass-user-modal',
  templateUrl: './controller-change-pass-user-modal.component.html',
  styleUrls: ['./controller-change-pass-user-modal.component.css']
})
export class ControllerChangePassUserModalComponent implements OnInit {

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

  @Output() closedModal = new EventEmitter<boolean>();
  @Output() emitSaved = new EventEmitter<string>();

  constructor() {
    this.isAlertActive = false;
    this.isModalActive = false;
   }

  ngOnInit() {
  }

  formCancel() {
    this.isAlertActive = false;
    this.closedModal.emit(false);
  }

  close() {
    this.isModalActive = false;
  }

  saved(form: NgForm) {
    this.isModalActive = false;
    this.emitSaved.emit('saved');
  }

}
