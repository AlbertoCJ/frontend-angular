import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Container } from '../../../docker/entities';


@Injectable({
  providedIn: 'root'
})
export class DockerService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getContainers(status: string) {
    const formData: FormData = new FormData();
    formData.append('status', status);

    return this.http.post(`${ this.url }/containers`, formData).pipe(
      map( (resp: any) => {
        const containers = resp.containers ? resp.containers.map( container => new Container(container)) : [];
        return containers;
      })
    );
  }

  removeContainer(id: string) {
    const formData: FormData = new FormData();
    formData.append('action', 'remove');

    return this.http.post(`${ this.url }/containers/${ id }`, formData).pipe(
      map( (resp: any) => {
        return resp.ok;
      })
    );
  }

  startContainer(id: string) {
    const formData: FormData = new FormData();
    formData.append('action', 'start');

    return this.http.post(`${ this.url }/containers/${ id }`, formData).pipe(
      map( (resp: any) => {
        return resp.ok;
      })
    );
  }

  stopContainer(id: string) {
    const formData: FormData = new FormData();
    formData.append('action', 'stop');

    return this.http.post(`${ this.url }/containers/${ id }`, formData).pipe(
      map( (resp: any) => {
        return resp.ok;
      })
    );
  }

  runContainers(numContainers: number) {
    const formData: FormData = new FormData();
    formData.append('nContainers', numContainers.toString());

    return this.http.post(`${ this.url }/container/run`, formData).pipe(
      map( (resp: any) => {
        return resp;
      })
    );
  }

}
