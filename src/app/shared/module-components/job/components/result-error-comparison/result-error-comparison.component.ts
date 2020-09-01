import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../entities/job';
import { SelectItem } from 'primeng/api/selectitem';
import { CapitalizePipe } from '../../../../../core/pipes/capitalize/capitalize.pipe';
import { SplitCamelCaseToStringPipe } from '../../../../../core/pipes/split-camel-case-to-string/split-camel-case-to-string.pipe';
import { Label, Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { ToCsvService } from '../../../../../core/services/csv/to-csv.service';

@Component({
  selector: 'app-result-error-comparison',
  templateUrl: './result-error-comparison.component.html',
  styleUrls: ['./result-error-comparison.component.css']
})
export class ResultErrorComparisonComponent implements OnInit {

  types: SelectItem[];
  selectedType: string;

  tableHead: any[];
  tableBody: any[];

  optionsErrors: SelectItem[];
  selectedError: string;

  // Pipes
  capitalizePipe = new CapitalizePipe();
  splitCamelCaseToStringPipe = new SplitCamelCaseToStringPipe();

  // Charts
  lineChartLabels: Label[];
  lineChartData: ChartDataSets[];
  // lineChartColors: Color[] = [
  //   { // dark grey
  //     backgroundColor: 'rgba(77,83,96,0.2)',
  //     borderColor: 'rgba(77,83,96,1)',
  //     pointBackgroundColor: 'rgba(77,83,96,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(77,83,96,1)'
  //   }
  // ];
  public lineChartLegend = false;
  // public lineChartType = 'line';
  public lineChartOptions: ChartOptions = {
    responsive: true
  };

  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  // public barChartPlugins = [pluginDataLabels];

  @Input() job: Job;

  constructor(private toCsv: ToCsvService) {
    this.types = [
      {label: 'pi pi-chart-bar', value: 'chart'},
      {label: 'pi pi-table', value: 'table'}
    ];
    this.selectedType = this.types[0].value;
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
        if (dataAlgorithms[nameAlgorithm].model && dataAlgorithms[nameAlgorithm].model.validation) {
          label.push(this.splitCamelCaseToStringPipe.transform(this.capitalizePipe.transform(nameAlgorithm)));
          data.push(dataAlgorithms[nameAlgorithm].model.validation[nameError]);
        }
      }
    }

    this.lineChartLabels = label;
    this.lineChartData = [
      { data,
        label: this.splitCamelCaseToStringPipe.transform(this.capitalizePipe.transform(nameError)),
        backgroundColor: '#9CCDFF',
        hoverBackgroundColor: '#2E95FF'
      }
    ];
  }

  generateTable(event) {
    if (event.value === 'table') {
      const dataAlgorithms = this.job.dataAlgorithms;
      let headers = [];
      const table = [];
      for (const nameAlgorithm in dataAlgorithms) {
        if (dataAlgorithms.hasOwnProperty(nameAlgorithm)) {

          if (dataAlgorithms[nameAlgorithm].model && dataAlgorithms[nameAlgorithm].model.validation) {
            const validation = dataAlgorithms[nameAlgorithm].model.validation;
            const row = [];

            headers = [];
            headers.push(null);
            row.push(this.splitCamelCaseToStringPipe.transform(this.capitalizePipe.transform(nameAlgorithm)));
            for (const nameError in validation) {
              if (validation.hasOwnProperty(nameError) && nameError !== 'weightedPrecision' && nameError !== 'error') {
                headers.push(this.splitCamelCaseToStringPipe.transform(this.capitalizePipe.transform(nameError)));
                row.push(validation[nameError]);
              }
            }
            table.push(row);
          }
        }
      }
      this.tableHead = [];
      this.tableHead = headers;
      this.tableBody = [];
      this.tableBody = table;
    }
  }

  downloadCSV() {

    let headers: any = null;

    const data = [];

    this.optionsErrors.forEach( nameOfError => {

      const nameError = nameOfError.value;

      const headersTemp: any = {};
      const itemDataTemp: any = {};

      if (headers) {
        headersTemp.error = 'Error';
      }

      itemDataTemp.error = nameError;

      const dataAlgorithms = this.job.dataAlgorithms;
      for (const key in dataAlgorithms) {
        if (dataAlgorithms.hasOwnProperty(key)) {

          const nameAlgorithm = key;
          if (dataAlgorithms[nameAlgorithm].model && dataAlgorithms[nameAlgorithm].model.validation) {

            if (headers) {
              headersTemp[nameAlgorithm] = this.splitCamelCaseToStringPipe.transform(this.capitalizePipe.transform(nameAlgorithm));
            }

            itemDataTemp[nameAlgorithm] = dataAlgorithms[nameAlgorithm].model.validation[nameError];

          }
        }
      }

      headers = headersTemp;
      data.push(itemDataTemp);
    });

    this.toCsv.exportCSVFile(headers, data, 'errorsData');
  }

}
