import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-accept-button',
  templateUrl: './accept-button.component.html',
  styleUrls: ['./accept-button.component.css']
})
export class AcceptButtonComponent implements OnInit {

  label: string;
  @Input() disabled = false;

  @Output() emitClicked = new EventEmitter<string>();

  constructor(public translate: TranslateService) {
    this.label = this.translate.instant('buttons.btnAccept');
  }

  ngOnInit() {
  }

  clicked() {
    this.emitClicked.emit('clicked');
  }

}
