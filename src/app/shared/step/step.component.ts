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
    if (activeIndex) { activeIndex <= 0 ? this.activeIndex = 0 : this.activeIndex = (activeIndex - 1); }
  }

  @Output() emitStep = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
    this.activeIndex = 0;
  }

}
