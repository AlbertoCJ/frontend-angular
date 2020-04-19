import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Dataset } from '../../../shared/module-components/datasets/entities/dataset';
import { FormJobData } from '../../../shared/module-components/job/entities/form-job-data/form-job-data';
import { map } from 'rxjs/operators';
import { ListJob } from '../../../shared/module-components/job/entities/list-job';
import { Job } from '../../../shared/module-components/job/entities/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  launchJob( formJobData: FormJobData, dataset: Dataset, listAlgorithms: any, containers: any ) {
    const formData: FormData = new FormData();
    formData.append('fileName', dataset.file);
    formData.append('jobName', formJobData.name);
    formData.append('jobDescription', formJobData.description);
    formData.append('algorithms', JSON.stringify(listAlgorithms));
    formData.append('containers', JSON.stringify(containers));

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.post(`${ this.url }/algorithm`, formData).pipe(
      map( (resp: any) => {
        return resp;
      })
    );
  }

  getListJobs(page: number, limit: number, nameSearch: string, descriptionSearch: string) {

    const params = new HttpParams()
    .set('nameSearch', nameSearch)
    .set('descriptionSearch', descriptionSearch)
    .set('page', page.toString())
    .set('limit', limit.toString());

    return this.http.get(`${ this.url }/job`, { params }).pipe(
      map( (resp: any) => {
        const respJobs = resp.jobs;
        const listJobs = new ListJob(respJobs);
        return listJobs;
      })
    );

  }

  getJob(id: string) {
    return this.http.get(`${ this.url }/job/${ id }`).pipe(
      map( (resp: any) => {
        const respJob = resp.job;
        const job = new Job(respJob);
        return job;
      })
    );

  }

  deleteJob(id) {
    return this.http.delete(`${ this.url }/job/${ id }`).pipe(
      map( (resp: any) => {
        const respJob = resp.job;
        const job = new Job(respJob);
        return job;
      })
    );
  }
}
