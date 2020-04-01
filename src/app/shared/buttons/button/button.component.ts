import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() type = 'button';
  @Input() label = '';
  @Input() icon = null;
  @Input() iconPos = 'left'; // 'left' or 'right'
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
