import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-previous-button',
  templateUrl: './previous-button.component.html',
  styleUrls: ['./previous-button.component.css']
})
export class PreviousButtonComponent implements OnInit {

  label: string;
  @Input() disabled = false;

  constructor() {
    this.label = 'Prev';
  }

  ngOnInit() {
  }

}
