import { NgModule } from '@angular/core';
// Pages
import { DatasetsUploadPageComponent } from './datasets-upload-page/datasets-upload-page.component';
import { DatasetsListPageComponent } from './datasets-list-page/datasets-list-page.component';

// Modules
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

// List components
import { DATASETS_COMPONENTS } from './components';

// List containers
import { DATASETS_CONTROLLERS } from './controllers/index';


@NgModule({
  declarations: [
    DatasetsUploadPageComponent,
    DatasetsListPageComponent,
    DATASETS_COMPONENTS,
    DATASETS_CONTROLLERS
  ],
  imports: [
    CoreModule,
    SharedModule
  ],
  exports: [
    DATASETS_COMPONENTS,
    DATASETS_CONTROLLERS
  ]
})
export class DatasetsModule { }
