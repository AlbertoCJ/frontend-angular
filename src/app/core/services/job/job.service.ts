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

  launchJob( formJobData: FormJobData, dataset: Dataset, listAlgorithms: any, containers: any, platform: string ) {
    const formData: FormData = new FormData();
    formData.append('fileName', dataset.file);
    formData.append('jobName', formJobData.name);
    formData.append('jobDescription', formJobData.description);
    formData.append('algorithms', JSON.stringify(listAlgorithms));
    formData.append('containers', JSON.stringify(containers));
    formData.append('platform', platform);

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    // return this.http.post(`${ this.url }/algorithm`, formData).pipe(
    //   map( (resp: any) => {
    //     return resp;
    //   })
    // );
    return this.http.post(`${ this.url }/job`, formData).pipe(
      map( (resp: any) => {
        const respJob = resp.job;
        const job = new Job(respJob);
        return job;
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

  getListJobsRunning(page: number, limit: number) {

    const params = new HttpParams()
    .set('page', page.toString())
    .set('limit', limit.toString());

    return this.http.get(`${ this.url }/job/running`, { params }).pipe(
      map( (resp: any) => {
        const respJobs = resp.jobs;
        const listJobs = new ListJob(respJobs);
        return listJobs;
      })
    );

  }

  getListJobsLatests(limit: number) {

    const page = 1;

    const params = new HttpParams()
    .set('page', page.toString())
    .set('limit', limit.toString());

    return this.http.get(`${ this.url }/job/latests`, { params }).pipe(
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

  updateJob(jobUpdate: Job) {
    const formData: FormData = new FormData();
    formData.append('description', jobUpdate.description);

    return this.http.put(`${ this.url }/job/${ jobUpdate.id }`, formData).pipe(
      map( (resp: any) => {
        const respJob = resp.job;
        const job = new Job(respJob);
        return job;
      })
    );
  }

  deleteJob(job: Job) {
    const body = {
      timeId: job.timeId
    };

    let options = {};

    if (job.hasStatus === 'RUNNING') {
      options = {
        body
      };
    }

    return this.http.delete(`${ this.url }/job/${ job.id }`, options).pipe(
      map( (resp: any) => {
        const respJob = resp.job;
        const jobParse = new Job(respJob);
        return jobParse;
      })
    );
  }
}
