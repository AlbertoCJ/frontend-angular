import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../core/services/validators/validators.service';
import { UserService } from '../../../core/services/user/user.service';
import { MessageService } from 'primeng/api';
import { HttpErrorService } from '../../../core/services/http-error/http-error.service';
import { User } from '../../../core/entities/user/user';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-controller-change-pass-user-modal',
  templateUrl: './controller-change-pass-user-modal.component.html',
  styleUrls: ['./controller-change-pass-user-modal.component.css']
})
export class ControllerChangePassUserModalComponent implements OnInit {

  isAlertActive: boolean;
  isModalActive: boolean;

  changePassForm: FormGroup;
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
      this.user = user;
    }
  }

  @Output() closedModal = new EventEmitter<boolean>();
  @Output() emitSaved = new EventEmitter<string>();

  constructor(private fb: FormBuilder,
              private validators: ValidatorsService,
              private userService: UserService,
              private messageService: MessageService,
              private httpError: HttpErrorService,
              public translate: TranslateService) {
    this.isAlertActive = false;
    this.isModalActive = false;
    this.changePassForm = this.fb.group({
      password: ['', Validators.required],
      password2: ['', Validators.required]
    }, {
      validators: this.validators.equalPasswords('password', 'password2')
    });
   }

  ngOnInit() {
  }

  get passwordInvalid() {
    return this.changePassForm.get('password').invalid && this.changePassForm.get('password').touched;
  }

  get password2Invalid() {
    const pass1 = this.changePassForm.get('password').value;
    const pass2 = this.changePassForm.get('password2').value;

    return ( pass1 === pass2 ) ? false : true;
  }


  formCancel() {
    this.isAlertActive = false;
    this.closedModal.emit(false);
    this.resetForm();
  }

  close() {
    this.isModalActive = false;
  }

  saved() {
    if ( this.changePassForm.invalid ) {
      return Object.values( this.changePassForm.controls ).forEach( control => {
        if ( control instanceof FormGroup ) {
          // tslint:disable-next-line: no-shadowed-variable
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
      });
    } else {
      this.isModalActive = false;
      this.emitSaved.emit('changed');

      this.user.password = this.changePassForm.value.password;
      // this.user.email = this.editUserForm.value.email;
      // this.user.state = this.editUserForm.value.state;

      this.userService.changePassUser(this.user).subscribe( (resp: User) => {
        this.isModalActive = false;
        this.emitSaved.emit('saved');
        // this.editUserForm.reset({
        //   name: '',
        //   email: '',
        //   state: true
        // });
        this.messageService.add({severity: 'success', detail: this.translate.instant('menssageToast.storedCorrectly')});
      }, (err) => {
        this.httpError.checkError(err,
          this.translate.instant('alerts.alert'),
          this.translate.instant('controllerChangePassUserModal.messageErrorChangePassUser'));
      });
    }
  }

  resetForm() {
    this.changePassForm.reset({
      password: '',
      password2: ''
    });
  }

}
