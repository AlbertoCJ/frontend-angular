import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../core/entities/user/user';
import { ValidatorsService } from '../../../core/services/validators/validators.service';
import { UserService } from '../../../core/services/user/user.service';
import { MessageService } from 'primeng/api';
import { HttpErrorService } from '../../../core/services/http-error/http-error.service';
import { AlertService } from '../../../core/services/alert/alert.service';

@Component({
  selector: 'app-controller-create-user-modal',
  templateUrl: './controller-create-user-modal.component.html',
  styleUrls: ['./controller-create-user-modal.component.css']
})
export class ControllerCreateUserModalComponent implements OnInit {

  isAlertActive: boolean;
  isModalActive: boolean;

  createUserForm: FormGroup;
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

  constructor(private fb: FormBuilder,
              private validators: ValidatorsService,
              private userService: UserService,
              private messageService: MessageService,
              private alertService: AlertService,
              private httpError: HttpErrorService) {
    this.isAlertActive = false;
    this.isModalActive = false;
    this.createUserForm = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(3) ]],
      email: ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      state: [true]
    }, {
      validators: this.validators.equalPasswords('password', 'password2')
    });
    this.user = new User();
   }

  get nameInvalid() {
    return this.createUserForm.get('name').invalid && this.createUserForm.get('name').touched;
  }

  get emailInvalid() {
    return this.createUserForm.get('email').invalid && this.createUserForm.get('email').touched;
  }

  get passwordInvalid() {
    return this.createUserForm.get('password').invalid && this.createUserForm.get('password').touched;
  }

  get password2Invalid() {
    const pass1 = this.createUserForm.get('password').value;
    const pass2 = this.createUserForm.get('password2').value;

    return ( pass1 === pass2 ) ? false : true;
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
    if ( this.createUserForm.invalid ) {
      return Object.values( this.createUserForm.controls ).forEach( control => {
        if ( control instanceof FormGroup ) {
          // tslint:disable-next-line: no-shadowed-variable
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
      });
    } else {

      this.user.name = this.createUserForm.value.name;
      this.user.email = this.createUserForm.value.email;
      this.user.password = this.createUserForm.value.password;
      this.user.state = this.createUserForm.value.state;

      this.userService.createUser(this.user).subscribe( (resp: User) => {
        this.isModalActive = false;
        this.emitSaved.emit('saved');
        this.createUserForm.reset({
          name: '',
          email: '',
          password: '',
          password2: '',
          state: true
        });
        this.messageService.add({severity: 'success', detail: 'Guardado correctamente'}); // TODO: Traducir
      }, (err) => {
        if (err.error && err.error.err && err.error.err.code === 11000) {
          this.alertService.setAlert('Alerta', `Ya existe el email: ${ err.error.err.keyValue.email }`); // Traducir
        } else {
          this.httpError.checkError(err, 'Alerta', 'Error al crear usuario'); // TODO: Traducir
        }
      });
    }
  }

}
