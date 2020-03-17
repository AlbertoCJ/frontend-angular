import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

// Components
import { MenubarComponent } from './menubar/menubar.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { StepComponent } from './step/step.component';
import { BUTTONS_COMPONENTS } from './buttons/index';

@NgModule({
  declarations: [
    MenubarComponent,
    HeaderTitleComponent,
    StepComponent,
    BUTTONS_COMPONENTS
  ],
  imports: [
    CoreModule
  ],
  exports: [
    CoreModule,
    MenubarComponent,
    HeaderTitleComponent,
    StepComponent,
    BUTTONS_COMPONENTS
  ]
})
export class SharedModule { }
