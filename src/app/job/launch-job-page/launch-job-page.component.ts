import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
// import { Steps } from '../../shared/module-components/job/enums/steps.enum';
import { Dataset } from 'src/app/shared/module-components/datasets/entities';

@Component({
  selector: 'app-launch-job-page',
  templateUrl: './launch-job-page.component.html',
  styleUrls: ['./launch-job-page.component.css']
})
export class LaunchJobPageComponent implements OnInit {
  items: MenuItem[];
  activeStep: number;
  activeTab: number;
  datasetSelected: Dataset;
  listAlgorithms: any; // Object created in ControllerAlgorithmConfigComponent

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
    this.activeTab = 0;
   }

  ngOnInit() {
  }

  changeStep(step) {
    this.activeStep = step;
    this.activeTab = step - 1;
  }

  // Section to show
  // isDataset() {
  //   return this.activeStep === Steps.DATASET;
  // }

  // isAlgorithm() {
  //   return this.activeStep === Steps.ALGORITHM;
  // }

  // isWorkers() {
  //   return this.activeStep === Steps.WORKERS;
  // }

  // isConfirm() {
  //   return this.activeStep === Steps.CONFIRM;
  // }

  // Set data sections
  setDatasetSelected(dataset: Dataset) {
    this.datasetSelected = dataset;
  }

  setListAlgorithms(listAlgorithms: any) {
    this.listAlgorithms = listAlgorithms;
    console.log(listAlgorithms);
  }
}
