import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasetsUploadPageComponent } from './datasets-upload-page/datasets-upload-page.component';
import { DatasetsListPageComponent } from './datasets-list-page/datasets-list-page.component';


@NgModule({
  declarations: [
    DatasetsUploadPageComponent,
    DatasetsListPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DatasetsModule { }
