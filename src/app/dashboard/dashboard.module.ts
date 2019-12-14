import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CoreModule
  ],
  exports: [
    CoreModule
  ]
})
export class DashboardModule { }
