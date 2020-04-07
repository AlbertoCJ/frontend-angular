import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Dataset } from '../../../shared/module-components/datasets/entities/dataset';
import { FormJobData } from '../../../shared/module-components/job/entities/job-data/form-job-data';
import { map } from 'rxjs/operators';

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
    // formData.append('containers', containers);

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.post(`${ this.url }/algorithm`, formData).pipe(
      map( (resp: any) => {
        // const respDataset = resp.dataset;
        // const dataset = new Dataset(respDataset);
        // return dataset;
        console.log(resp);
      })
    );
  }
}
