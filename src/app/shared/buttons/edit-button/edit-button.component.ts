import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {

  label: string;
  @Input() disabled = false;

  @Output() emitClicked = new EventEmitter<string>();

  constructor() {
    this.label = 'Editar'; // TODO: Traducir
  }

  ngOnInit() {
  }

  clicked() {
    this.emitClicked.emit('clicked');
  }

}
