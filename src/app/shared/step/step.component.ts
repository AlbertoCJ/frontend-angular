import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {


  activeIndex: number ;

  @Input() items: MenuItem[];
  @Input('activeStep') set activeStep(activeIndex: number) {
    if (activeIndex) { this.activeIndex = activeIndex; }
  }

  @Output() emitStep = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
    this.activeIndex = 0;
  }

}
