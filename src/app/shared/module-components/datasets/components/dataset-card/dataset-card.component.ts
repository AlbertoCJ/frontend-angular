import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dataset } from '../../entities';

@Component({
  selector: 'app-dataset-card',
  templateUrl: './dataset-card.component.html',
  styleUrls: ['./dataset-card.component.css']
})
export class DatasetCardComponent implements OnInit {

  @Input() showButtons = true;
  @Input() isClicker = false;
  @Input() dataset: Dataset;

  @Output() emitSelected = new EventEmitter<Dataset>();
  @Output() emitRemoved = new EventEmitter<Dataset>();

  constructor() { }

  ngOnInit() {
  }

  select() {
    this.emitSelected.emit(this.dataset);
  }

  remove() {
    this.emitRemoved.emit(this.dataset);
  }

}
