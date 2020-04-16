import { NgModule } from '@angular/core';
// Pages
import { LaunchJobPageComponent } from './launch-job-page/launch-job-page.component';
import { JobListPageComponent } from './job-list-page/job-list-page.component';

// Modules
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LaunchJobPageComponent,
    JobListPageComponent
  ],
  imports: [
    CoreModule,
    SharedModule
  ],
  exports: [
    CoreModule,
    SharedModule
  ]
})
export class JobModule { }
