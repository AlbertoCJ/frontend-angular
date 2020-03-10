import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  items: MenuItem[];

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-fw pi-home',
        routerLink: ['/dashboard']
      },
      {
          label: 'DataSets',
          icon: 'pi pi-file',
          items: [{
                  label: 'Agregar',
                  icon: 'pi pi-fw pi-upload',
                  routerLink: ['/datasets-upload']
              },
              {
                label: 'Listado',
                icon: 'pi pi-fw pi-list',
                routerLink: ['/datasets-list']
            }
          ]
      },
      {
        label: 'Job',
        icon: 'pi pi-file',
        items: [{
                label: 'Lanzar',
                icon: 'pi pi-fw pi-upload',
                routerLink: ['/launch-job']
            },
            {
              label: 'Listado',
              icon: 'pi pi-fw pi-list',
              routerLink: ['/job-list']
          }
        ]
    },
      {
        label: 'Gestión Docker',
        icon: 'pi pi-desktop',
        items: [{
                label: 'Agregar',
                icon: 'pi pi-fw pi-upload',
                routerLink: ['/datasets-upload']
            },
            {
              label: 'Listado',
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
