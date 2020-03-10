import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-launch-job-page',
  templateUrl: './launch-job-page.component.html',
  styleUrls: ['./launch-job-page.component.css']
})
export class LaunchJobPageComponent implements OnInit {
  items: MenuItem[];
  activeIndex: number;

  constructor() {
    this.items = [
      {
        label: 'Personal'
      },
      {
        label: 'Seat'
      },
      {
        label: 'Payment'
      },
      {
        label: 'Confirmation'
      }
    ];
   }

  ngOnInit() {
  }

}
