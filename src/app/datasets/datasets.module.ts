import { NgModule } from '@angular/core';
// Pages
import { DatasetsUploadPageComponent } from './datasets-upload-page/datasets-upload-page.component';
import { DatasetsListPageComponent } from './datasets-list-page/datasets-list-page.component';

// Modules
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DatasetsUploadPageComponent,
    DatasetsListPageComponent
  ],
  imports: [
    CoreModule,
    SharedModule
  ]
})
export class DatasetsModule { }
