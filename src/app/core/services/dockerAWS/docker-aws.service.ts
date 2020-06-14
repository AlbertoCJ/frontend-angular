import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DockerAwsService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  async createContainers() {
    // const formData: FormData = new FormData();
    // formData.append('nContainers', numContainers.toString());

    const promise = await this.http.post(`${ this.url }/createWorker`, {}).toPromise();
    return promise;

    // .pipe(
    //   map( (resp: any) => {
    //     return resp;
    //   })
    // );
  }
}
