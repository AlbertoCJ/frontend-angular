import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Login } from '../../entities/login/login';
import { GlobalConfigService } from '../../services/global-config/global-config.service';
import { HttpErrorService } from '../../services/http-error/http-error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  textError: string;
  showError = false;
  login: Login;
  showPass = false;

  constructor(private auth: AuthService,
              private router: Router,
              private globalConfigService: GlobalConfigService,
              private httpError: HttpErrorService) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
    this.login = new Login();
  }

  ngOnInit() {
  }

  loginSubmit(form: FormGroup) {
    const emailValue = form.value.email;
    const passValue = form.value.password;
    this.showError = false;
    this.textError = '';

    if (emailValue !== '' && passValue !== '') {
      this.login.email = form.value.email;
      this.login.password = form.value.password;
      this.auth.login(this.login).subscribe( resp => {

        this.globalConfigService.getGlobalConfig().subscribe( globalConfig => {

          const user = this.auth.getUser();
          if (user && user.role === 'USER_ROLE') {
            this.router.navigateByUrl('home');
          } else if (user && user.role === 'ADMIN_ROLE') {
            this.router.navigateByUrl('configurations');
          }

        }); // TODO Gestionar si da error


      }, (err) => {
        if (err.status === 401) {
          this.textError = 'Email y/o contraseña erronea.';
          this.showError = true;
        } else {
          this.httpError.checkError(err, 'Alerta', 'Error inesperado al intentar loguearse.'); // TODO: Traducir
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
