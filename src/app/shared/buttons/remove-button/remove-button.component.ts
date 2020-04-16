import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-remove-button',
  templateUrl: './remove-button.component.html',
  styleUrls: ['./remove-button.component.css']
})
export class RemoveButtonComponent implements OnInit {

  label: string;
  @Input() disabled = false;

  @Output() emitClicked = new EventEmitter<string>();

  constructor() {
    this.label = 'Eliminar'; // TODO: Traducir
  }

  ngOnInit() {
  }

  clicked() {
    this.emitClicked.emit('clicked');
  }

}
