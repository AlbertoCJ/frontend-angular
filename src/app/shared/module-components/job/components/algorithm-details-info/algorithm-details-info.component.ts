import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../entities/task';

@Component({
  selector: 'app-algorithm-details-info',
  templateUrl: './algorithm-details-info.component.html',
  styleUrls: ['./algorithm-details-info.component.css']
})
export class AlgorithmDetailsInfoComponent implements OnInit {

  // algorithm: any;
  // task: Task;

  @Input() algorithm: any; // TODO: Quizas no haga falta
  @Input() task: Task;

  constructor() { }

  ngOnInit() {
  }

}
