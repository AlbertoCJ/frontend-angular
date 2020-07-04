import { NgModule } from '@angular/core';
// Pages
import { ContainerAWSListPageComponent } from './container-awslist-page/container-awslist-page.component';

// Modules
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

// List components
import { DOCKERAWS_COMPONENTS } from './components/index';

// List controllers
import { DOCKERAWS_CONTROLLERS } from './controllers/index';

@NgModule({
  declarations: [
    ContainerAWSListPageComponent,
    DOCKERAWS_COMPONENTS,
    DOCKERAWS_CONTROLLERS
  ],
  imports: [
    CoreModule,
    SharedModule
  ],
  exports: [
    CoreModule,
    DOCKERAWS_COMPONENTS,
    DOCKERAWS_CONTROLLERS
  ]
})
export class DockerAWSModule { }
