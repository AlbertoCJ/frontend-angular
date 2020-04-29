import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

// PAGES
import { AdministrationUsersPageComponent } from './administration-users-page/administration-users-page.component';
import { AdministrationConfigPageComponent } from './administration-config-page/administration-config-page.component';

// CONROLLERS
import { ADMIN_CONTROLLERS } from './controllers/index';

// COMPONENTS
import { ADMIN_COMPONENTS } from './components/index';

@NgModule({
  declarations: [
    AdministrationUsersPageComponent,
    AdministrationConfigPageComponent,
    ADMIN_COMPONENTS,
    ADMIN_CONTROLLERS
  ],
  imports: [
    CoreModule,
    SharedModule
  ],
  exports: [
    CoreModule,
    ADMIN_COMPONENTS,
    ADMIN_CONTROLLERS
  ]
})
export class AdministrationModule { }
