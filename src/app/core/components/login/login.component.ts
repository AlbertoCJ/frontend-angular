import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../entities/user/user';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  textError: string;
  showError = false;
  user: User;
  showPass = false;

  constructor(private auth: AuthService,
              private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
    this.user = new User();
  }

  ngOnInit() {
  }

  login(form: FormGroup) {
    console.log(form);
    const emailValue = form.value.email;
    const passValue = form.value.password;
    this.showError = false;
    this.textError = '';

    if (emailValue !== '' && passValue !== '') {
      this.user.email = form.value.email;
      this.user.password = form.value.password;
      this.auth.login(this.user).subscribe( resp => {

        const user = this.auth.getUser();
        if (user && user.role === 'USER_ROLE') {
          this.router.navigateByUrl('dashboard');
        } else if (user && user.role === 'ADMIN_ROLE') {
          this.router.navigateByUrl('administration-users');
        }

      }, (err) => {
        if (err.status === 401) {
          this.textError = 'Email y/o contraseña erronea.';
          this.showError = true;
        } else {
          alert(`Error inesperado: ${ err.status }`); // TODO: Ver como mostrar alertas
        }
      });
    } else {
      if (emailValue === '') {
        this.textError = 'Email vacio';
        this.showError = true;
      }
      if (emailValue === '' && passValue === '') { this.textError += ' y '; }
      if (passValue === '') {
        this.textError += 'Contraseña vacia';
        this.showError = true;
      }
    }
  }

}
