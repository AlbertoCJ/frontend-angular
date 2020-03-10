import { NgModule } from '@angular/core';
// Pages


// Modules
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

// List components
// import { JOB_COMPONENTS } from './components';

// List containers
// import { JOB_CONTAINERS } from './containers/index';


@NgModule({
  declarations: [

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
