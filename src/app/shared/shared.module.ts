import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

// Components
import { MenubarComponent } from './menubar/menubar.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { StepComponent } from './step/step.component';
import { CollapseComponent } from './collapse/collapse.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CardInfoMiniComponent } from './card-info-mini/card-info-mini.component';
import { ErrorTextareaComponent } from './error-textarea/error-textarea.component';
import { BUTTONS_COMPONENTS } from './buttons/index';
import { BUTTONSPANEL_COMPONENTS } from './buttons-panel/index';
import { MODALS_COMPONENTS } from './modals/index';

// Module components
import { DATASETS_SHARED } from './module-components/datasets/index';
import { JOB_SHARED } from './module-components/job/index';

@NgModule({
  declarations: [
    MenubarComponent,
    HeaderTitleComponent,
    StepComponent,
    CollapseComponent,
    PaginationComponent,
    CardInfoMiniComponent,
    ErrorTextareaComponent,
    BUTTONS_COMPONENTS,
    BUTTONSPANEL_COMPONENTS,
    MODALS_COMPONENTS,
    DATASETS_SHARED,
    JOB_SHARED
  ],
  imports: [
    CoreModule
  ],
  exports: [
    CoreModule,
    MenubarComponent,
    HeaderTitleComponent,
    StepComponent,
    CollapseComponent,
    PaginationComponent,
    CardInfoMiniComponent,
    ErrorTextareaComponent,
    BUTTONS_COMPONENTS,
    BUTTONSPANEL_COMPONENTS,
    MODALS_COMPONENTS,
    DATASETS_SHARED,
    JOB_SHARED
  ]
})
export class SharedModule { }
