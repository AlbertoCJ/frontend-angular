import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../core/entities/user/user';

@Component({
  selector: 'app-controller-create-user-modal',
  templateUrl: './controller-create-user-modal.component.html',
  styleUrls: ['./controller-create-user-modal.component.css']
})
export class ControllerCreateUserModalComponent implements OnInit {

  isAlertActive: boolean;
  isModalActive: boolean;

  user: User;

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
    // TODO: Crear form
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
