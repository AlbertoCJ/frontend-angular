import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../entities/job';
import { SelectItem } from 'primeng/api/selectitem';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-controller-job-result',
  templateUrl: './controller-job-result.component.html',
  styleUrls: ['./controller-job-result.component.css']
})
export class ControllerJobResultComponent implements OnInit {

  types: SelectItem[];
  selectedType: string;

  @Input() job: Job;

  constructor(public translate: TranslateService) {
    this.initTypes();
    this.translate.onLangChange.subscribe( change => {
      this.initTypes();
    });
    this.selectedType = this.types[0].value;
   }

  ngOnInit() {
  }

  initTypes() {
    this.types = [
      {label: this.translate.instant('controllerJobResult.labelErrors'), value: 'ERRORS'},
      {label: this.translate.instant('controllerJobResult.labelPredictions'), value: 'PREDICTIONS'}
    ];
  }
}
