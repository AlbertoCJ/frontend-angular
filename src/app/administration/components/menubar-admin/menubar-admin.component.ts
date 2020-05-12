import { Component, OnInit, ApplicationRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../core/services/auth/auth.service';
import { SelectItem } from 'primeng/api/selectitem';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../../core/services/user/user.service';
import { HttpErrorService } from '../../../core/services/http-error/http-error.service';

@Component({
  selector: 'app-menubar-admin',
  templateUrl: './menubar-admin.component.html',
  styleUrls: ['./menubar-admin.component.css']
})
export class MenubarAdminComponent implements OnInit {

  items: MenuItem[];

  language: SelectItem[];
  selectedLanguage: string;

  constructor(private auth: AuthService,
              public translate: TranslateService,
              private userService: UserService,
              private httpError: HttpErrorService) {
    this.language = [
      {label: 'EN', value: 'en'},
      {label: 'ES', value: 'es'}
    ];
  }

  ngOnInit() {
    this.selectedLanguage = this.userService.getLanguage();
    this.changeLanguage({ value: this.userService.getLanguage() });
  }

  generateMenuItems() {
    this.items = [
      {
        label: this.translate.instant('menubarAdmin.config'),
        icon: 'pi pi-cog',
        routerLink: ['/configurations']
      },
      {
          label: this.translate.instant('menubarAdmin.userManager'),
          icon: 'pi pi-users',
          routerLink: ['/administration-users']
      },
      {
        label: this.translate.instant('menubarAdmin.dockerManager'),
        icon: 'pi pi-desktop',
        items: [
            {
                label: this.translate.instant('menubarAdmin.aws'),
                icon: 'pi pi-fw pi-list',
                routerLink: ['/container-list']
            },
            {
              label: this.translate.instant('menubarAdmin.local'),
              icon: 'pi pi-fw pi-list',
              routerLink: ['/container-list']
          }
        ]
    }
    ];
  }

  logout() {
    this.auth.logout();
  }

  changeLanguage(language: any) {
    const user = this.auth.getUser();
    user.language = language.value;
    this.userService.changeLanguage(user).subscribe( user => {
      this.userService.saveLanguage(user.language);
      this.translate.use(this.userService.getLanguage());
      this.generateMenuItems();
    }, (err) => {
        // tslint:disable-next-line: max-line-length
        this.httpError.checkError(err, this.translate.instant('modals.warning'), this.translate.instant('menubar.msgAlertErrorChangeLanguage'));
      });
  }

}
