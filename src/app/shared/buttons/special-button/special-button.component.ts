import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-special-button',
  templateUrl: './special-button.component.html',
  styleUrls: ['./special-button.component.css']
})
export class SpecialButtonComponent implements OnInit {

  stringClassBase = 'pointer ui-special-button';
  stringClass = `${ this.stringClassBase } ui-special-button-info`;

  @Input() btnText = '';
  @Input() disabled = false;
  @Input() selected = false;
  @Input('customClass') set customClass(value: string) {
    if (value) {
      this.stringClass = `${ this.stringClassBase } ${ value }`;
    }
  }

  @Output() emitClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    if (!this.disabled) {
      this.emitClick.emit(true);
    }
  }

}
