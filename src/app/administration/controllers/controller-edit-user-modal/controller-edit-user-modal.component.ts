import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../core/entities/user/user';
import { ValidatorsService } from '../../../core/services/validators/validators.service';
import { UserService } from '../../../core/services/user/user.service';
import { MessageService } from 'primeng/api';
import { HttpErrorService } from '../../../core/services/http-error/http-error.service';
import { AlertService } from '../../../core/services/alert/alert.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-controller-edit-user-modal',
  templateUrl: './controller-edit-user-modal.component.html',
  styleUrls: ['./controller-edit-user-modal.component.css']
})
export class ControllerEditUserModalComponent implements OnInit {

  isAlertActive: boolean;
  isModalActive: boolean;

  editUserForm: FormGroup;
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

  @Input('user') set setUser(user: User) {
    if (user) {
      this.editUserForm.patchValue({
        name: user.name,
        email: user.email,
        state: user.state,
        sendEmail: user.sendEmail
      });
      this.user = user;
    }
  }

  @Output() closedModal = new EventEmitter<boolean>();
  @Output() emitSaved = new EventEmitter<string>();

  constructor(private fb: FormBuilder,
              private validators: ValidatorsService,
              private userService: UserService,
              private messageService: MessageService,
              private alertService: AlertService,
              private httpError: HttpErrorService,
              public translate: TranslateService) {
    this.isAlertActive = false;
    this.isModalActive = false;
    this.editUserForm = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(3) ]],
      email: ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
      state: [true],
      sendEmail: [false]
    });
  }

  get nameInvalid() {
    return this.editUserForm.get('name').invalid && this.editUserForm.get('name').touched;
  }

  get emailInvalid() {
    return this.editUserForm.get('email').invalid && this.editUserForm.get('email').touched;
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

  saved() {
    if ( this.editUserForm.invalid ) {
      return Object.values( this.editUserForm.controls ).forEach( control => {
        if ( control instanceof FormGroup ) {
          // tslint:disable-next-line: no-shadowed-variable
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
      });
    } else {

      this.user.name = this.editUserForm.value.name;
      this.user.email = this.editUserForm.value.email;
      this.user.state = this.editUserForm.value.state;
      this.user.sendEmail = this.editUserForm.value.sendEmail;
      console.log(this.user);
      this.userService.updateUser(this.user).subscribe( (resp: User) => {
        this.isModalActive = false;
        this.emitSaved.emit('saved');
        this.messageService.add({severity: 'success', detail: this.translate.instant('menssageToast.storedCorrectly')});
      }, (err) => {
        if (err.error && err.error.err && err.error.err.code === 11000) {
          this.alertService.setAlert(this.translate.instant('alerts.alert'),
          `${ this.translate.instant('controllerCreateUserModal.messageErrorExistEmail') }: ${ err.error.err.keyValue.email }`);
        } else {
          this.httpError.checkError(err,
            this.translate.instant('alerts.alert'),
            this.translate.instant('controllerEditUserModal.messageErrorEditUser'));
        }
      });
    }
  }

}
