import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-list',
  templateUrl: './error-list.component.html',
  styleUrls: ['./error-list.component.css']
})
export class ErrorListComponent implements OnInit {

  headerText = 'Errores'; // TODO: Traducir
  maxHeight = '80px';

  @Input() errorList: string[];
  @Input('maxHeight') set setMaxHeight(value: number) {
    if (value) {
      this.maxHeight = `${ value }px`;
    }
  }

  constructor() {}

  ngOnInit() {
  }

}