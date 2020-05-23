import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ListTimes } from '../../../administration/entities/list-times';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getListTime(userId: string, page: number, limit: number) {

    const params = new HttpParams()
    // .set('nameSearch', nameSearch)
    // .set('emailSearch', emailSearch)
    .set('page', page.toString())
    .set('limit', limit.toString());

    return this.http.get(`${ this.url }/time/${ userId }`, { params }).pipe(
      map( (resp: any) => {
        const respTimes = resp.times;
        const listTimes =  new ListTimes(respTimes);
        return listTimes;
      })
    );
  }
}
