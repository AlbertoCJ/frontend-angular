import { Component, OnInit, Input } from '@angular/core';
import { Dataset } from '../../../core/entities/dataset/dataset';

@Component({
  selector: 'app-dataset-card',
  templateUrl: './dataset-card.component.html',
  styleUrls: ['./dataset-card.component.css']
})
export class DatasetCardComponent implements OnInit {

  @Input() showButtons = true;
  @Input() dataset: Dataset;


  constructor() { }

  ngOnInit() {
  }

}
