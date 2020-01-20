import { NgModule } from '@angular/core';
// Pages
import { ContainerListPageComponent } from './container-list-page/container-list-page.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

// List containers
import { DOCKER_COMPONENTS } from './components/index';
import { DOCKER_CONTAINERS } from './containers/index';

@NgModule({
  declarations: [
    ContainerListPageComponent,
    DOCKER_COMPONENTS,
    DOCKER_CONTAINERS
  ],
  imports: [
    CoreModule,
    SharedModule
  ],
  exports: [
    DOCKER_COMPONENTS,
    DOCKER_CONTAINERS
  ]
})
export class DockerModule { }
