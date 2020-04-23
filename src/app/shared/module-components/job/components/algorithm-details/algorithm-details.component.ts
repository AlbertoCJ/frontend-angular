import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../entities/job';
import { Task } from '../../entities/task';
import { Model } from '../../entities/model';

@Component({
  selector: 'app-algorithm-details',
  templateUrl: './algorithm-details.component.html',
  styleUrls: ['./algorithm-details.component.css']
})
export class AlgorithmDetailsComponent implements OnInit {

  algorithm: any;
  task: Task;
  model: Model;

  @Input('algorithm') set setDataAlgorithm(data: any) {
    if (data) {
      if (data.algorithm) { this.algorithm = data.algorithm; }
      if (data.task) { this.task = data.task; }
      if (data.model) { this.model = data.model; }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
