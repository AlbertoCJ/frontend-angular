import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { NgxLoadingModule } from 'ngx-loading';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { DatasetsModule } from './datasets/datasets.module';
import { JobModule } from './job/job.module';
import { DockerModule } from './docker/docker.module';
import { DockerAWSModule } from './docker-aws/docker-aws.module';
import { AdministrationModule } from './administration/administration.module';

// Interceptors
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { LoadingScreenInterceptor } from './core/interceptors/loading-screen.interceptor';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent
  ],
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    NgxLoadingModule.forRoot({}),
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HomeModule,
    DatasetsModule,
    JobModule,
    DockerModule,
    DockerAWSModule,
    AdministrationModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingScreenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
