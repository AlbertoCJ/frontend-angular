import { Component, OnInit, Input } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { Model } from '../../entities/model';
import { TranslateService } from '@ngx-translate/core';
import { CapitalizePipe } from '../../../../../core/pipes/capitalize/capitalize.pipe';
import { SplitCamelCaseToStringPipe } from '../../../../../core/pipes/split-camel-case-to-string/split-camel-case-to-string.pipe';
import { ConfigParamBooleanPipe } from '../../../../../core/pipes/config-param-boolean/config-param-boolean.pipe';

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

  // Pipes
  capitalizePipe = new CapitalizePipe();
  splitCamelCaseToStringPipe = new SplitCamelCaseToStringPipe();
  configParamBooleanPipe = new ConfigParamBooleanPipe();

  @Input() height: string;
  @Input('algorithm') set seAlgorithm(algorit: any) {
    if (algorit) {
      this.types[0].disabled = false;
      this.selectedType = this.types[0].value;
      const conf = algorit.config;
      const configs = [];
      for (const key in conf) {
        if (conf.hasOwnProperty(key)) {
          configs.push(
            {
              label: this.splitCamelCaseToStringPipe.transform(this.capitalizePipe.transform(key)),
              value: this.configParamBooleanPipe.transform(key, conf[key])
            });
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
          if (key !== 'weightedPrecision' && key !== 'error') {
            results.push({ label: this.splitCamelCaseToStringPipe.transform(this.capitalizePipe.transform(key)), value: validation[key] });
          }
        }
      }
      this.results = results;
    }
  }


  constructor(public translate: TranslateService) {
    this.initTypes();
    this.translate.onLangChange.subscribe( change => {
      this.initTypes();
    });
   }

  ngOnInit() {
  }

  initTypes() {
    this.types = [
      {label: this.translate.instant('algorithmDetailsData.labelConfig'), value: 'CONFIG', disabled: true},
      {label: this.translate.instant('algorithmDetailsData.labelResult'), value: 'RESULT', disabled: true}
    ];
  }

}
