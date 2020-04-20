import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dataset } from '../../entities';

@Component({
  selector: 'app-dataset-card',
  templateUrl: './dataset-card.component.html',
  styleUrls: ['./dataset-card.component.css']
})
export class DatasetCardComponent implements OnInit {

  // Confirm
  isConfirmActive = false;
  titleConfirm = 'Aviso'; // TODO: Traducir
  messageConfirm = 'Se eliminara permanentemente. ¿Estás seguro?'; // TODO: Traducir

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

  // remove() {
  //   this.emitRemoved.emit(this.dataset);
  // }

  // Confirm
  removeConfirm() {
    this.isConfirmActive = true;
  }

  remove() {
    this.emitRemoved.emit(this.dataset);
    this.isConfirmActive = false;
  }

  removeCancel() {
    this.isConfirmActive = false;
  }

}
