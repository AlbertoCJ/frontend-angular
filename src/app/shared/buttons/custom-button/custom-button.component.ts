import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {

  @Input() label = '';
  @Input() icon = null;
  @Input() iconPos = ''; // 'left' or 'right'
  @Input() disabled = false;
  @Input() styleClass = ''; // ui-button-secondary, ui-button-success, ui-button-info, ui-button-warning, ui-button-danger

  @Output() emitClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    this.emitClicked.emit('clicked');
  }

}
