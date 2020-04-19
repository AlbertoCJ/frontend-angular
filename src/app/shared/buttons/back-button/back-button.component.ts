import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {

  label: string;
  @Input() disabled = false;

  @Output() emitClicked = new EventEmitter<string>();

  constructor() {
    this.label = 'Volver'; // TODO: Traducir
  }

  ngOnInit() {
  }

  clicked() {
    this.emitClicked.emit('clicked');
  }

}
