import { NgModule } from '@angular/core';
// Pages
import { LaunchJobPageComponent } from './launch-job-page/launch-job-page.component';

// Modules
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LaunchJobPageComponent
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
