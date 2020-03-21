import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Steps } from '../enums/steps.enum';

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
    this.activeStep = 1;
   }

  ngOnInit() {
  }

  changeStep(step) {
    this.activeStep = step;
  }

  isDataset() {
    return this.activeStep === Steps.DATASET;
  }

  isAlgorithm() {
    return this.activeStep === Steps.ALGORITHM;
  }

  isWorkers() {
    return this.activeStep === Steps.WORKERS;
  }

  isConfirm() {
    return this.activeStep === Steps.CONFIRM;
  }

}
