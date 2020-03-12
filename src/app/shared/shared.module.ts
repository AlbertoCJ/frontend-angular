import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

// Components
import { MenubarComponent } from './menubar/menubar.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { StepComponent } from './step/step.component';



@NgModule({
  declarations: [
    MenubarComponent,
    HeaderTitleComponent,
    StepComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    CoreModule,
    MenubarComponent,
    HeaderTitleComponent,
    StepComponent
  ]
})
export class SharedModule { }
