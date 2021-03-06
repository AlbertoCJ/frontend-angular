import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { FormDataset, Dataset } from '../../../shared/module-components/datasets/entities';
import { ListDatasets } from 'src/app/shared/module-components/datasets/entities/list-datasets';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getListDataset(page: number, limit: number, descriptionSearch: string) {

    const params = new HttpParams().set('descriptionSearch', descriptionSearch).set('page', page.toString()).set('limit', limit.toString());

    return this.http.get(`${ this.url }/dataset`, { params }).pipe(
      map( (resp: any) => {
        const respDatasets = resp.datasets;
        const listDatasets = new ListDatasets(respDatasets);
        return listDatasets;
      })
    );

  }

  upload( formDataset: FormDataset ) {
    const formData: FormData = new FormData();
    formData.append('file', formDataset.file, formDataset.file.name);
    formData.append('description', formDataset.description);


    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Access-Control-Allow-Origin': '*'
    //   })
    // };

    return this.http.post(`${ this.url }/dataset`, formData).pipe(
      map( (resp: any) => {
        const respDataset = resp.dataset;
        const dataset = new Dataset(respDataset);
        return dataset;
      })
    );
  }
  downloadDataset(dataset: Dataset) {
    const formData: FormData = new FormData();
    formData.append('fileName', dataset.file);
    formData.append('originalName', dataset.fullName);

    return this.http.post(`${ this.url }/dataset/download`, formData, { responseType: 'blob' }).pipe(
      map( (fileBlob: any) => {
        return fileBlob;
      })
    );
  }

  updateDataset(datasetUpdate: Dataset) {
    const formData: FormData = new FormData();
    formData.append('description', datasetUpdate.description);

    return this.http.put(`${ this.url }/dataset/${ datasetUpdate.id }`, formData ).pipe(
      map( (resp: any) => {
        const respDataset = resp.dataset;
        const dataset = new Dataset(respDataset);
        return dataset;
      })
    );
  }

  deleteDataset(id) {
    return this.http.delete(`${ this.url }/dataset/${ id }`).pipe(
      map( (resp: any) => {
        const respDataset = resp.dataset;
        const dataset = new Dataset(respDataset);
        return dataset;
      })
    );
  }
}
