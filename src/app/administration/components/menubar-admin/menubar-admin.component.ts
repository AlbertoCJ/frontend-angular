import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-menubar-admin',
  templateUrl: './menubar-admin.component.html',
  styleUrls: ['./menubar-admin.component.css']
})
export class MenubarAdminComponent implements OnInit {

  items: MenuItem[];

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.items = [
      {
          label: 'Gestión de usuarios',
          icon: 'pi pi-users',
          routerLink: ['/administration-users']
      },
      {
        label: 'Configuración',
        icon: 'pi pi-cog',
        routerLink: ['/configurations']
      },
      {
        label: 'Gestión Docker',
        icon: 'pi pi-desktop',
        items: [
            {
                label: 'AWS',
                icon: 'pi pi-fw pi-list',
                routerLink: ['/container-list']
            },
            {
              label: 'Local',
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

}
