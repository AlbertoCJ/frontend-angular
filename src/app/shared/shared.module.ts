import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

// Components
import { MenubarComponent } from './menubar/menubar.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { StepComponent } from './step/step.component';
import { BUTTONS_COMPONENTS } from './buttons/index';
import { BUTTONSPANEL_COMPONENTS } from './buttons-panel/index';

@NgModule({
  declarations: [
    MenubarComponent,
    HeaderTitleComponent,
    StepComponent,
    BUTTONS_COMPONENTS,
    BUTTONSPANEL_COMPONENTS
  ],
  imports: [
    CoreModule
  ],
  exports: [
    CoreModule,
    MenubarComponent,
    HeaderTitleComponent,
    StepComponent,
    BUTTONS_COMPONENTS,
    BUTTONSPANEL_COMPONENTS
  ]
})
export class SharedModule { }
