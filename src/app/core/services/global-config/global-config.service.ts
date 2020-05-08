import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { GlobalConfig } from '../../../administration/entities/global-config';

@Injectable({
  providedIn: 'root'
})
export class GlobalConfigService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getGlobalConfig() {

    return this.http.get(`${ this.url }/globalConfig`).pipe(
      map( (resp: any) => {
        const respGlobalConfig = resp.globalConfig;
        const globalConfig = new GlobalConfig(respGlobalConfig);
        this.saveGlobalConfigSessionStorage(respGlobalConfig);
        return globalConfig;
      })
    );

  }

  updateGlobalConfig(globalConfigUpdate: GlobalConfig) {
    const formData: FormData = new FormData();
    formData.append('localContainer', globalConfigUpdate.localContainer);
    formData.append('showLists', globalConfigUpdate.showLists);

    return this.http.put(`${ this.url }/globalConfig/${ globalConfigUpdate.id }`, formData ).pipe(
      map( (resp: any) => {
        const respGlobalConfig = resp.globalConfig;
        const globalConfig = new GlobalConfig(respGlobalConfig);
        this.saveGlobalConfigSessionStorage(respGlobalConfig);
        return globalConfig;
      })
    );
  }

  restoreGlobalConfig(globalConfigRestore: GlobalConfig) {
    return this.http.put(`${ this.url }/globalConfig/restore/${ globalConfigRestore.id }`, {}).pipe(
      map( (resp: any) => {
        const respGlobalConfig = resp.globalConfig;
        const globalConfig = new GlobalConfig(respGlobalConfig);
        this.saveGlobalConfigSessionStorage(respGlobalConfig);
        return globalConfig;
      })
    );
  }

  // Gestionar Global Config
  removeGlobalConfigSessionStorage() {
    sessionStorage.removeItem('globalConfig');
  }

  private saveGlobalConfigSessionStorage(globalConfig: GlobalConfig) {
    sessionStorage.setItem('globalConfig', JSON.stringify(globalConfig));
  }

  getGlobalConfigSessionStorage() {
    let globalConfig = null;
    if (sessionStorage.getItem('globalConfig')) {
      globalConfig = new GlobalConfig(JSON.parse(sessionStorage.getItem('globalConfig')));

    }
    return globalConfig;
  }

}
