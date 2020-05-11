import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../../entities/login/login';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import * as jwt_decode from 'jwt-decode';
import { User } from '../../entities/user/user';
import { GlobalConfigService } from '../global-config/global-config.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.apiUrl;
  userToken: string;

  constructor(private http: HttpClient,
              private router: Router,
              private globalConfigService: GlobalConfigService,
              private userService: UserService) { }


  login( login: Login ) {
    const authData = {
      email: login.email,
      password: login.password
    };


    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Access-Control-Allow-Origin': '*'
    //   })
    // };

    return this.http.post(`${ this.url }/login`, authData).pipe(
      map( resp => {
        this.saveToken( resp['token']);
        return resp;
      })
    );
  }

  logout() {
    this.userService.removeLanguage();
    this.globalConfigService.removeGlobalConfigSessionStorage();
    this.removeToken();
    this.router.navigateByUrl('/login');
  }

  // Gestionar token
  removeToken() {
    sessionStorage.removeItem('token');
  }

  private saveToken(token: string) {
    this.userToken = token;
    sessionStorage.setItem('token', token);
  }

  getToken() {
    if (sessionStorage.getItem('token')) {
      this.userToken = sessionStorage.getItem('token');

    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  getUser() {
    const decoded = jwt_decode(this.userToken);
    const user = new User(decoded.user);
    return user;
  }

  isAuth(): boolean {
    let auth = false;
    if (this.getToken() !== '') {
      auth = true;
    }
    return auth;
  }
}
