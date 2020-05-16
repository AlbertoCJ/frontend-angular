import { NgModule } from '@angular/core';
// Pages
import { ContainerListPageComponent } from './container-list-page/container-list-page.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

// List components
import { DOCKER_COMPONENTS } from './components/index';

// List controllers
import { DOCKER_CONTROLLERS } from './controllers/index';

@NgModule({
  declarations: [
    ContainerListPageComponent,
    DOCKER_COMPONENTS,
    DOCKER_CONTROLLERS
  ],
  imports: [
    CoreModule,
    SharedModule
  ],
  exports: [
    CoreModule,
    DOCKER_COMPONENTS,
    DOCKER_CONTROLLERS
  ]
})
export class DockerModule { }
