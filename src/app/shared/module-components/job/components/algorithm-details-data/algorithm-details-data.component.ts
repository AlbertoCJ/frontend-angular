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

  algorithm: any;
  model: Model;

  results: any[];

  @Input() height: string;
  @Input('algorithm') set seAlgorithm(algorit: any) {
    if (algorit) {
      this.types[0].disabled = false;
      this.selectedType = this.types[0].value;
      this.algorithm = algorit;
    }
  }
  @Input('model') set setModel(model: Model) {
    if (model) {
      this.types[1].disabled = false;
      this.model = model;
      const validation = model.validation;
      const results = [];
      for (const key in validation) {
        if (validation.hasOwnProperty(key)) {
          results.push({ label: this.splitCamelCaseToString(key), value: validation[key] });
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

}
