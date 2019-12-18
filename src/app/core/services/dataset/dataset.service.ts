import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { FormDataset } from '../../entities/dataset/form-dataset';
import { Dataset } from '../../entities/dataset/dataset';

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
      map( (resp: any) => {
        const respDataset = resp.dataset;
        const dataset = new Dataset(respDataset._id,
                                    respDataset.description,
                                    respDataset.file,
                                    respDataset.name,
                                    respDataset.extension,
                                    respDataset.full_name,
                                    respDataset.date_creation,
                                    respDataset.size);
        return dataset;
      })
    );
  }
}
