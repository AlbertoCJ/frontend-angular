import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

// Components
import { MenubarComponent } from './menubar/menubar.component';
import { HeaderTitleComponent } from './header-title/header-title.component';



@NgModule({
  declarations: [
    MenubarComponent,
    HeaderTitleComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    CoreModule,
    MenubarComponent,
    HeaderTitleComponent
  ]
})
export class SharedModule { }
