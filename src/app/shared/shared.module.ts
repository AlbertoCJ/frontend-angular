import { NgModule } from '@angular/core';
import { MenubarComponent } from './menubar/menubar.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    MenubarComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    CoreModule,
    MenubarComponent
  ]
})
export class SharedModule { }
