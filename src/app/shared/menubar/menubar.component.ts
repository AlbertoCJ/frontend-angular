import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../core/services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api/selectitem';
import { UserService } from '../../core/services/user/user.service';
import { HttpErrorService } from '../../core/services/http-error/http-error.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  items: MenuItem[];

  language: SelectItem[];
  selectedLanguage: string;

  constructor(private auth: AuthService,
              public translate: TranslateService,
              private userService: UserService,
              private httpError: HttpErrorService,
              private router: Router) {
    this.language = [
      {label: 'EN', value: 'en'},
      {label: 'ES', value: 'es'}
    ];
    this.translate.onLangChange.subscribe( change => {
      this.initTranslateData();
    });
  }

  ngOnInit() {
    this.selectedLanguage = this.userService.getLanguage();
    // this.changeLanguage({ value: this.selectedLanguage });
    this.initTranslateData();
  }

  initTranslateData() {
    this.items = [
      {
        icon: 'pi pi-fw pi-home',
        routerLink: ['/home']
      },
      {
          label: this.translate.instant('menubar.dataSets'),
          icon: 'pi pi-file',
          items: [{
                  label: this.translate.instant('menubar.add'),
                  icon: 'pi pi-fw pi-upload',
                  routerLink: ['/datasets-upload']
              },
              {
                label: this.translate.instant('menubar.list'),
                icon: 'pi pi-fw pi-list',
                routerLink: ['/datasets-list']
            }
          ]
      },
      {
        label: this.translate.instant('menubar.job'),
        icon: 'pi pi-file',
        items: [{
                label: this.translate.instant('menubar.launch'),
                icon: 'pi pi-fw pi-directions',
                routerLink: ['/launch-job']
            },
            {
              label: this.translate.instant('menubar.list'),
              icon: 'pi pi-fw pi-list',
              routerLink: ['/job-list']
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
      this.userService.saveLanguage(language.value);
      this.translate.use(language.value);
    }, (err) => {
        // tslint:disable-next-line: max-line-length
        this.httpError.checkError(err, this.translate.instant('modals.warning'), this.translate.instant('menubar.msgAlertErrorChangeLanguage'));
      });
  }

}
