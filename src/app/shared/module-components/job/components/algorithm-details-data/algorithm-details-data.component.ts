import { Component, OnInit, Input } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { Model } from '../../entities/model';

@Component({
  selector: 'app-algorithm-details-data',
  templateUrl: './algorithm-details-data.component.html',
  styleUrls: ['./algorithm-details-data.component.css']
})
export class AlgorithmDetailsDataComponent implements OnInit {

  types: SelectItem[];
  selectedType: string;

  // algorithm: any;
  // model: Model;

  configs: any[];
  results: any[];

  @Input() height: string;
  @Input('algorithm') set seAlgorithm(algorit: any) {
    if (algorit) {
      this.types[0].disabled = false;
      this.selectedType = this.types[0].value;
      const conf = algorit.config;
      const configs = [];
      for (const key in conf) {
        if (conf.hasOwnProperty(key)) {
          configs.push({ label: this.splitCamelCaseToString(this.capitalize(key)), value: conf[key] });
        }
      }
      this.configs = configs;
    }
  }
  @Input('model') set setModel(model: Model) {
    if (model) {
      this.types[1].disabled = false;
      const validation = model.validation;
      const results = [];
      for (const key in validation) {
        if (validation.hasOwnProperty(key)) {
          results.push({ label: this.splitCamelCaseToString(this.capitalize(key)), value: validation[key] });
        }
      }
      this.results = results;
    }
  }


  constructor() {
    this.types = [
      {label: 'Configuración', value: 'CONFIG', disabled: true}, // TODO: Traducir
      {label: 'Resultados', value: 'RESULT', disabled: true} // TODO: Traducir
  ];
   }

  ngOnInit() {
  }

  splitCamelCaseToString(s) {
    return s.split(/(?=[A-Z])/).join(' ');
  }

  capitalize(s) {
    return s.trim().replace(/^\w/, (c) => c.toUpperCase());
  }

}
