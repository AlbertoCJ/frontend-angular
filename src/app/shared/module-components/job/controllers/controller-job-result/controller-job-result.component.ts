import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../entities/job';

@Component({
  selector: 'app-controller-job-result',
  templateUrl: './controller-job-result.component.html',
  styleUrls: ['./controller-job-result.component.css']
})
export class ControllerJobResultComponent implements OnInit {


  @Input() job: Job;

  constructor() { }

  ngOnInit() {
  }

}
