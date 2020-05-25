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
    // TODO: Traducir dinamicamente usando servicio
    this.types = [
      {label: 'Comparación de errores', value: 'ERRORS'},
      {label: 'Comparación de la predicción', value: 'PREDICTIONS'}
      // {label: this.translate.instant('algorithmDetailsData.labelConfig'), value: 'CONFIG'},
      // {label: this.translate.instant('algorithmDetailsData.labelResult'), value: 'RESULT'}
    ];
    this.selectedType = this.types[0].value;
   }

  ngOnInit() {
  }

}
