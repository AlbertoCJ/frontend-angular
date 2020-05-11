import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ListUsers } from '../../../administration/entities/list-users';
import { User } from '../../entities/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getListUsers(page: number, limit: number, nameSearch: string, emailSearch: string) {

    const params = new HttpParams()
    .set('nameSearch', nameSearch)
    .set('emailSearch', emailSearch)
    .set('page', page.toString())
    .set('limit', limit.toString());

    return this.http.get(`${ this.url }/user`, { params }).pipe(
      map( (resp: any) => {
        const respUsers = resp.users;
        const listUsers = new ListUsers(respUsers);
        return listUsers;
      })
    );
  }

  // getJob(id: string) {
  //   return this.http.get(`${ this.url }/job/${ id }`).pipe(
  //     map( (resp: any) => {
  //       const respJob = resp.job;
  //       const job = new Job(respJob);
  //       return job;
  //     })
  //   );

  // }

  createUser(userCreate: User) {
    return this.http.post(`${ this.url }/user`, userCreate).pipe(
      map( (resp: any) => {
        const respUser = resp.user;
        const user = new User(respUser);
        return user;
      })
    );
  }

  updateUser(userUpdate: User) {
    // const formData: FormData = new FormData();
    // formData.append('name', userUpdate.name);
    // formData.append('email', userUpdate.email);
    // formData.append('state', userUpdate.state.toString());

    return this.http.put(`${ this.url }/user/${ userUpdate.id }`, userUpdate).pipe(
      map( (resp: any) => {
        const respUser = resp.user;
        const user = new User(respUser);
        return user;
      })
    );
  }

  changePassUser(userUpdate: User) {
    // const formData: FormData = new FormData();
    // formData.append('password', pass);

    return this.http.put(`${ this.url }/userPass/${ userUpdate.id }`, userUpdate).pipe(
      map( (resp: any) => {
        const respUser = resp.user;
        const user = new User(respUser);
        return user;
      })
    );
  }

  changeLanguage(userUpdate: User) {
    return this.http.put(`${ this.url }/userLanguage/${ userUpdate.id }`, userUpdate).pipe(
      map( (resp: any) => {
        const respUser = resp.user;
        const user = new User(respUser);
        return user;
      })
    );
  }

  // Gestionar idioma
  removeLanguage() {
    sessionStorage.removeItem('language');
  }

  saveLanguage(language: string) {
    sessionStorage.setItem('language', language);
  }

  getLanguage() {
    if (sessionStorage.getItem('language')) {
      return sessionStorage.getItem('language');

    } else {
      return 'es';
    }
  }
}
