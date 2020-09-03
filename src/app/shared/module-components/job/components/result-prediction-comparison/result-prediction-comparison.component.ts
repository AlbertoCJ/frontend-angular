import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../entities/job';
import { SelectItem } from 'primeng/api/selectitem';
import { CapitalizePipe } from '../../../../../core/pipes/capitalize/capitalize.pipe';
import { SplitCamelCaseToStringPipe } from '../../../../../core/pipes/split-camel-case-to-string/split-camel-case-to-string.pipe';
import { Label, Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { TranslateService } from '@ngx-translate/core';
import { ToCsvService } from '../../../../../core/services/csv/to-csv.service';

@Component({
  selector: 'app-result-prediction-comparison',
  templateUrl: './result-prediction-comparison.component.html',
  styleUrls: ['./result-prediction-comparison.component.css']
})
export class ResultPredictionComparisonComponent implements OnInit {

  optionsErrors: SelectItem[];
  selectedError: string;

  optionsPosition: SelectItem[];
  selectedPosition: number;

  // Pipes
  capitalizePipe = new CapitalizePipe();
  splitCamelCaseToStringPipe = new SplitCamelCaseToStringPipe();

  // Charts
  lineChartLabels: Label[];
  lineChartData: ChartDataSets[];
  lineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartOptions: ChartOptions = {
    responsive: true
  };


  @Input() job: Job;

  constructor(private toCsv: ToCsvService,
              public translate: TranslateService) {
    this.optionsErrors = [
      {label: this.splitCamelCaseToStringPipe.transform(this.capitalizePipe.transform('meanAbsoluteError')),
        value: 'meanAbsoluteError'},
      {label: this.splitCamelCaseToStringPipe.transform(this.capitalizePipe.transform('meanPriorAbsoluteError')),
        value: 'meanPriorAbsoluteError'},
      {label: this.splitCamelCaseToStringPipe.transform(this.capitalizePipe.transform('relativeAbsoluteError')),
        value: 'relativeAbsoluteError'},
      {label: this.splitCamelCaseToStringPipe.transform(this.capitalizePipe.transform('rootMeanPriorSquaredError')),
        value: 'rootMeanPriorSquaredError'},
      {label: this.splitCamelCaseToStringPipe.transform(this.capitalizePipe.transform('rootMeanSquaredError')),
        value: 'rootMeanSquaredError'},
      {label: this.splitCamelCaseToStringPipe.transform(this.capitalizePipe.transform('rootRelativeSquaredError')),
        value: 'rootRelativeSquaredError'},
    ];
    this.selectedError = this.optionsErrors[0].value;
    this.optionsPosition = [
      { label: '1', value: 1 }
    ];
    this.selectedPosition = 1;
   }

  ngOnInit() {
    this.generateChartLine(this.selectedError, this.selectedPosition);
  }

  generateOptionsPosition(size) {
    let options: SelectItem[];
    options = [];
    for (let i = 0; i < size; i++) {
      const val = i;
      options.push({ label: `${ val }`, value: val });
    }

    this.optionsPosition = options;
  }

  generateChartLine(changeError: any, changePosition: any) {

    const chartLineData = [];
    let major: number;
    let minor: number;

    const dataAlgorithms = this.job.dataAlgorithms;

    for (const key in dataAlgorithms) {
      if (dataAlgorithms.hasOwnProperty(key)) {
        const nameAlgorithm = key;
        // tslint:disable-next-line: max-line-length
        if (dataAlgorithms[nameAlgorithm].model && dataAlgorithms[nameAlgorithm].model.validation && dataAlgorithms[nameAlgorithm].model.prediction) {

          // Generar la lista de posicion
          if (this.optionsPosition.length === 1) {
            this.generateOptionsPosition(dataAlgorithms[nameAlgorithm].model.prediction.length);
          }

          const errorValue = dataAlgorithms[nameAlgorithm].model.validation[changeError];

          // Crear objeto por algoritmo
          chartLineData.push(
            {
              nameAlgorithm: this.splitCamelCaseToStringPipe.transform(this.capitalizePipe.transform(nameAlgorithm)),
              error: errorValue,
              prediction: dataAlgorithms[nameAlgorithm].model.prediction[changePosition - 1]
            }
          );

          // Obtener el mayor
          if (!major) {
            major = errorValue;
          } else {
            if (errorValue > major) {
              major = errorValue;
            }
          }

          // Obtener el menor
          if (!minor) {
            minor = errorValue;
          } else {
            if (errorValue < minor) {
              minor = errorValue;
            }
          }

        }
      }
    }

    // Ordena por prediccion
    // tslint:disable-next-line: only-arrow-functions
    chartLineData.sort(function(a, b) { return a.prediction - b.prediction; });

    // Generar grafica
    const label = [];
    const data = [];
    const dataCover = [];

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < chartLineData.length; i++) {
      if (major === minor) {
        chartLineData[i].error = 1; // chartLineData[i].error / 100;
      } else {
        chartLineData[i].error = 1 - ( (chartLineData[i].error - minor) / ( major - minor ) );
      }

      label.push(`${ chartLineData[i].nameAlgorithm } - ${ chartLineData[i].prediction}`);
      data.push(chartLineData[i].error);
    }

    // Genera data cover
    let prev = -1;
    for (let i = 0; i < chartLineData.length; i++) {
      if (chartLineData[i].error > prev) {
        dataCover[i] = chartLineData[i].error;
        prev = chartLineData[i].error;
      }
    }

    prev = -1;
    for (let i = chartLineData.length - 1; i >= 0; i--) {
      if (chartLineData[i].error > prev) {
        dataCover[i] = chartLineData[i].error;
        prev = chartLineData[i].error;
      }
    }

    this.lineChartLabels = label;
    this.lineChartData = [
      { data, lineTension: 0 },
      { data: dataCover, lineTension: 0, spanGaps: true }
    ];

  }


  downloadCSV() {

    const headers: any = {
      instance: 'Instance',
      algorithm: 'Algorithm',
      prediction: 'Prediction',
      reliability: 'Reliability'
    };

    const data: any = [];

    let positionLength = -1;

    const dataAlgorithms = this.job.dataAlgorithms;

    for (const key in dataAlgorithms) {
      if (dataAlgorithms.hasOwnProperty(key)) {
        const nameAlgorithm = key;
        // tslint:disable-next-line: max-line-length
        if (dataAlgorithms[nameAlgorithm].model && dataAlgorithms[nameAlgorithm].model.validation && dataAlgorithms[nameAlgorithm].model.prediction) {

          // Obtener valor posicion
          if (positionLength === -1) {
            positionLength = dataAlgorithms[nameAlgorithm].model.prediction.length;
          }
        }
      }
    }


    for (let i = 0; i < positionLength - 1; i++) {

      const currentInstance = i + 1;

      const lineData: any = [];
      let major: number;
      let minor: number;


      for (const key in dataAlgorithms) {
        if (dataAlgorithms.hasOwnProperty(key)) {
          const nameAlgorithm = key;
          // tslint:disable-next-line: max-line-length
          if (dataAlgorithms[nameAlgorithm].model && dataAlgorithms[nameAlgorithm].model.validation && dataAlgorithms[nameAlgorithm].model.prediction) {

            const errorValue = dataAlgorithms[nameAlgorithm].model.validation[this.selectedError];

            // Crear objeto por algoritmo
            lineData.push(
              {
                instance: currentInstance, // position
                algorithm: this.splitCamelCaseToStringPipe.transform(this.capitalizePipe.transform(nameAlgorithm)),
                prediction: dataAlgorithms[nameAlgorithm].model.prediction[i], // i = a position
                reliability: errorValue
              }
            );

            // Obtener el mayor
            if (!major) {
              major = errorValue;
            } else {
              if (errorValue > major) {
                major = errorValue;
              }
            }

            // Obtener el menor
            if (!minor) {
              minor = errorValue;
            } else {
              if (errorValue < minor) {
                minor = errorValue;
              }
            }

          }
        }
      }

      // tslint:disable-next-line: prefer-for-of
      for (let j = 0; j < lineData.length; j++) {
        if (major === minor) {
          lineData[j].error = 1; // chartLineData[i].error / 100;
        } else {
          lineData[j].reliability = 1 - ( (lineData[j].reliability - minor) / ( major - minor ) );
        }
        data.push(lineData[j]);
      }

    }

    this.toCsv.exportCSVFile(headers, data, `${ this.selectedError }Reliability`);
  }

}
