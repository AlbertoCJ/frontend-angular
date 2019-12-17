import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { FormDataset } from '../../entities/dataset/form-dataset';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }


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
      map( resp => {
        return resp;
      })
    );
  }
}
