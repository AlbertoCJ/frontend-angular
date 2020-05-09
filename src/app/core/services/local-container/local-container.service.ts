import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalContainerService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getLocalContainers() {

    return this.http.get(`${ this.url }/localContainer`).pipe(
      map( (resp: any) => {
        const respContainers = resp.containers;
        return respContainers;
      })
    );

  }
}
