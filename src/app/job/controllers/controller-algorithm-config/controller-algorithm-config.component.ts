import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Steps } from '../../enums/steps.enum';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-controller-algorithm-config',
  templateUrl: './controller-algorithm-config.component.html',
  styleUrls: ['./controller-algorithm-config.component.css']
})
export class ControllerAlgorithmConfigComponent implements OnInit {

  btnPrevDisabled: boolean;
  btnNextDisabled: boolean;

  cities: SelectItem[];
  selectedCity: string;
  checked: boolean;
  val2: number;

  @Output() emitStep = new EventEmitter<number>();

  constructor() {
    this.btnPrevDisabled = false;
    this.btnNextDisabled = false;
    this.cities = [];
    this.cities.push({label: 'Select Cities', value: 'Select Cities'});
    this.cities.push({label: 'New York', value: 'New York'});
    this.cities.push({label: 'Rome', value: 'Rome'});
    this.cities.push({label: 'London', value: 'London'});
    this.cities.push({label: 'Istanbul', value: 'Istanbul'});
    this.cities.push({label: 'Paris', value: 'Paris'});
    this.checked = true;
   }

  ngOnInit() {
  }

  btnPrevClicked() {
    this.emitStep.emit(Steps.DATASET);
  }

  btnNextClicked() {
    this.emitStep.emit(Steps.WORKERS);
  }

}
