import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-button',
  templateUrl: './view-button.component.html',
  styleUrls: ['./view-button.component.css']
})
export class ViewButtonComponent implements OnInit {

  label: string;
  @Input() disabled = false;

  @Output() emitClicked = new EventEmitter<string>();

  constructor() {
    this.label = 'Ver'; // TODO: Traducir
  }

  ngOnInit() {
  }

  clicked() {
    this.emitClicked.emit('clicked');
  }

}
