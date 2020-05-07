import { NgModule } from '@angular/core';
// Pages
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

// Modules
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CoreModule,
    SharedModule
  ],
  exports: [
    CoreModule
  ]
})
export class DashboardModule { }
