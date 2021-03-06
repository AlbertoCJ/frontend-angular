import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Login } from '../../entities/login/login';
import { GlobalConfigService } from '../../services/global-config/global-config.service';
import { HttpErrorService } from '../../services/http-error/http-error.service';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../services/user/user.service';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  language: SelectItem[];
  selectedLanguage: string;

  loginForm: FormGroup;
  textError: string;
  showError = false;
  login: Login;
  showPass = false;

  constructor(private auth: AuthService,
              private router: Router,
              private globalConfigService: GlobalConfigService,
              private httpError: HttpErrorService,
              public translate: TranslateService,
              private userService: UserService) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
    this.login = new Login();
    this.language = [
      {label: 'EN', value: 'en'},
      {label: 'ES', value: 'es'}
    ];
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
      this.auth.login(this.login).subscribe( (resp: any) => {

        if (this.userService.getLanguage() === null) {
          this.userService.saveLanguage(resp.user.language);
        }

        this.globalConfigService.getGlobalConfig().subscribe( globalConfig => {

          const user = this.auth.getUser();

          this.translate.use(this.userService.getLanguage());

          if (user && user.role === 'USER_ROLE') {
            this.router.navigateByUrl('home');
          } else if (user && user.role === 'ADMIN_ROLE') {
            this.router.navigateByUrl('configurations');
          }

        });


      }, (err) => {
        if (err.status === 401) {
          this.textError = this.translate.instant('login.txtErrEmailOrPass');
          this.showError = true;
        } else {
          // tslint:disable-next-line: max-line-length
          this.httpError.checkError(err, this.translate.instant('modals.warning'), this.translate.instant('login.msgAlertErrorLoginUnexpected'));
        }
      });
    } else {
      if (emailValue === '') {
        this.textError = this.translate.instant('login.txtErrEmailEmpty');
        this.showError = true;
      }
      if (emailValue === '' && passValue === '') { this.textError += this.translate.instant('login.txtErrAndEmpty'); }
      if (passValue === '') {
        this.textError += this.translate.instant('login.txtErrPassEmpty');
        this.showError = true;
      }
    }
  }

  changeLanguage(language: any) {
    this.translate.use(this.selectedLanguage);
  }

}
