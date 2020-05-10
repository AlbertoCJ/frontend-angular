import { NgModule } from '@angular/core';
// Pages
import { HomePageComponent } from './home-page/home-page.component';

// Modules
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CoreModule,
    SharedModule
  ],
  exports: [
    CoreModule
  ]
})
export class HomeModule { }
