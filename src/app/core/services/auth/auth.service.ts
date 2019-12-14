import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../entities/user/user';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000';
  userToken: string;

  constructor(private http: HttpClient,
              private router: Router) { }


  login( user: User ) {
    const authData = {
      email: user.email,
      password: user.password
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
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  private saveToken(token: string) {
    this.userToken = token;
    sessionStorage.setItem('token', token);
  }

  // nuevoUsuario( user: User ) {
  //   const authData = {
  //     name: user.name,
  //     email: user.email,
  //     password: user.password
  //   };

  //   return this.http.post(`${ this.url }/user`, authData).pipe(
  //     map( resp => {
  //       this.saveToken( resp['token']);
  //       return resp;
  //     })
  //   );
  // }

  getToken() {
    if (sessionStorage.getItem('token')) {
      this.userToken = sessionStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  isAuth(): boolean {
    let auth = false;
    if (this.getToken() !== '') {
      auth = true;
    }
    return auth;
  }
}
