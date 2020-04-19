import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.css']
})
export class SaveButtonComponent implements OnInit {

  label: string;
  @Input() disabled = false;

  @Output() emitClicked = new EventEmitter<string>();

  constructor() {
    this.label = 'Guardar'; // TODO: Traducir
  }

  ngOnInit() {
  }

  clicked() {
    this.emitClicked.emit('clicked');
  }

}
