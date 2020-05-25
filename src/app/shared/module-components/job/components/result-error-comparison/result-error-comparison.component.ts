import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../entities/job';
import { SelectItem } from 'primeng/api/selectitem';
import { CapitalizePipe } from '../../../../../core/pipes/capitalize/capitalize.pipe';
import { SplitCamelCaseToStringPipe } from '../../../../../core/pipes/split-camel-case-to-string/split-camel-case-to-string.pipe';
import { Label, Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-result-error-comparison',
  templateUrl: './result-error-comparison.component.html',
  styleUrls: ['./result-error-comparison.component.css']
})
export class ResultErrorComparisonComponent implements OnInit {

  optionsErrors: SelectItem[];
  selectedError: string;

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
  // public lineChartPlugins = [pluginAnnotations];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          // id: 'y-axis-0',
          // position: 'left',
        } // ,
        // {
        //   id: 'y-axis-1',
        //   position: 'right',
        //   gridLines: {
        //     color: 'rgba(255,0,0,0.3)',
        //   },
        //   ticks: {
        //     fontColor: 'red',
        //   }
        // }
      ]
    }
  };

  @Input() job: Job;

  constructor() {
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
   }

  ngOnInit() {
    this.generateChartLine({ value: this.optionsErrors[0].value });
  }

  generateChartLine(changeError: any) {
    const nameError = changeError.value;

    const label = [];
    const data = [];

    const dataAlgorithms = this.job.dataAlgorithms;
    for (const key in dataAlgorithms) {
      if (dataAlgorithms.hasOwnProperty(key)) {

        const nameAlgorithm = key;
        if (dataAlgorithms[nameAlgorithm].model.validation) {
          label.push(this.splitCamelCaseToStringPipe.transform(this.capitalizePipe.transform(nameAlgorithm)));
          data.push(dataAlgorithms[nameAlgorithm].model.validation[nameError]);
        }
      }
    }

    this.lineChartLabels = label;
    this.lineChartData = [
      { data, label: this.splitCamelCaseToStringPipe.transform(this.capitalizePipe.transform(nameError)) }
    ];
  }

}
