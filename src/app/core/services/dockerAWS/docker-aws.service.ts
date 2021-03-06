import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ContainerAws } from '../../../docker-aws/entities/container-aws';

@Injectable({
  providedIn: 'root'
})
export class DockerAwsService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  async createContainers(withoutUser = false) {
    const formData: FormData = new FormData();
    formData.append('withoutUser', withoutUser.toString());

    const promise = await this.http.post(`${ this.url }/createWorker`, formData).toPromise();
    return promise;
  }

  getContainersAws() {
    // return this.http.get(`${ this.url }/env`).pipe(
    //   map( (resp: any) => {
    //     const containersAws = resp.environments ? resp.environments.map( containerAws => new ContainerAws(containerAws)) : [];
    //     return containersAws;
    //   })
    // );
    return this.http.get(`${ this.url }/env`).pipe(
      map( (resp: any) => {
        const containersAws = resp.containersAws ? resp.containersAws.map( containerAws => new ContainerAws(containerAws)) : [];
        return containersAws;
      })
    );
  }

  // Delete app
  removeContainerAws(applicationName: string, containerId: string) {
    const httpParams = new HttpParams().set('applicationName', applicationName).set('containerId', containerId);
    const options = { params: httpParams };

    return this.http.delete(`${ this.url }/app`, options).pipe(
      map( (resp: any) => {
        return resp;
      })
    );
  }
}
