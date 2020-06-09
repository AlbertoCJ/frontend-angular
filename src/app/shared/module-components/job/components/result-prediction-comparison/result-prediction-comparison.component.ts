import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../entities/job';

@Component({
  selector: 'app-result-prediction-comparison',
  templateUrl: './result-prediction-comparison.component.html',
  styleUrls: ['./result-prediction-comparison.component.css']
})
export class ResultPredictionComparisonComponent implements OnInit {

  @Input() job: Job;

  constructor() { }

  ngOnInit() {
  }

  // generateData() {
  //   // const nameError = changeError.value;

  //   // const label = [];
  //   // const data = [];

  //   let loadTotalLoop = false;
  //   let totalLoop = 1;
  //   let cont = 0;

  //   while (cont < totalLoop) {

  //     const


  //     const dataAlgorithms = this.job.dataAlgorithms;
  //     for (const key in dataAlgorithms) {
  //       if (dataAlgorithms.hasOwnProperty(key)) {
  
  //         const nameAlgorithm = key;
  //         if (dataAlgorithms[nameAlgorithm].model.validation && dataAlgorithms[nameAlgorithm].model.prediction) {

  //           // Inicializar total del loop
  //           if (!loadTotalLoop) {
  //             totalLoop = dataAlgorithms[nameAlgorithm].model.prediction.length;
  //             loadTotalLoop = true;
  //           }

  //           // label.push(this.splitCamelCaseToStringPipe.transform(this.capitalizePipe.transform(nameAlgorithm)));
  //           // data.push(dataAlgorithms[nameAlgorithm].model.validation[nameError]);
  //         }
  //       }
  //     }
  //     cont++;
  //   }

  //   // this.lineChartLabels = label;
  //   // this.lineChartData = [
  //   //   { data, label: this.splitCamelCaseToStringPipe.transform(this.capitalizePipe.transform(nameError)) }
  //   // ];
  // }

}
