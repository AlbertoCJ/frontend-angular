import { NgModule } from '@angular/core';
// Pages
import { LaunchJobPageComponent } from './launch-job-page/launch-job-page.component';

// Modules
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';


// List components
import { JOB_COMPONENTS } from './components';

// List controllers
import { JOB_CONTROLLERS } from './controllers';

@NgModule({
  declarations: [
    LaunchJobPageComponent,
    JOB_COMPONENTS,
    JOB_CONTROLLERS
  ],
  imports: [
    CoreModule,
    SharedModule
  ],
  exports: [
    CoreModule,
    SharedModule,
    JOB_COMPONENTS,
    JOB_CONTROLLERS
  ]
})
export class JobModule { }
