import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-error-list',
  templateUrl: './error-list.component.html',
  styleUrls: ['./error-list.component.css']
})
export class ErrorListComponent implements OnInit {

  maxHeight = '80px';

  @Input() errorList: string[];
  @Input('maxHeight') set setMaxHeight(value: number) {
    if (value) {
      this.maxHeight = `${ value }px`;
    }
  }

  constructor(public translate: TranslateService) {}

  ngOnInit() {
  }

}