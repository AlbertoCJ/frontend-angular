import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-launch-job-page',
  templateUrl: './launch-job-page.component.html',
  styleUrls: ['./launch-job-page.component.css']
})
export class LaunchJobPageComponent implements OnInit {
  items: MenuItem[];
  activeStep: number ;

  constructor() {
    this.items = [
      {
        label: 'Dataset'
      },
      {
        label: 'Algoritmos'
      },
      {
        label: 'Contenedor'
      },
      {
        label: 'Confirmación'
      }
    ];
   }

  ngOnInit() {
    this.activeStep = 1;
  }

}
