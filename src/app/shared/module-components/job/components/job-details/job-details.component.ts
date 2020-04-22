import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../entities/job';
import { ViewMode } from '../../../../../core/enums/view-mode.enum';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  @Input() job: Job;
  @Input() mode = ViewMode.VIEW;

  constructor() { }

  ngOnInit() {
  }


}