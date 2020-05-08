import { ControllerListUserComponent } from './controller-list-user/controller-list-user.component';
import { ControllerCreateUserModalComponent } from './controller-create-user-modal/controller-create-user-modal.component';
import { ControllerEditUserModalComponent } from './controller-edit-user-modal/controller-edit-user-modal.component';
import { ControllerChangePassUserModalComponent } from './controller-change-pass-user-modal/controller-change-pass-user-modal.component';
import { ControllerGlobalConfigComponent } from './controller-global-config/controller-global-config.component';

export const ADMIN_CONTROLLERS = [
    ControllerListUserComponent,
    ControllerCreateUserModalComponent,
    ControllerEditUserModalComponent,
    ControllerChangePassUserModalComponent,
    ControllerGlobalConfigComponent
];
