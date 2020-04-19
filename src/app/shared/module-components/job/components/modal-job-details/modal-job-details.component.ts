import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../entities/job';
import { ViewMode } from '../../../../../core/enums/view-mode.enum';

@Component({
  selector: 'app-modal-job-details',
  templateUrl: './modal-job-details.component.html',
  styleUrls: ['./modal-job-details.component.css']
})
export class ModalJobDetailsComponent implements OnInit {

  isAlertActive: boolean;
  isModalActive: boolean;

  job: Job;

  @Input('isModalActive') set setIsModalActive(value: boolean) {
    if (value) {
      this.isAlertActive = true;
      this.isModalActive = true;
    } else {
      this.isAlertActive = false;
      this.isModalActive = false;
    }
  }
  @Input('job') set setJobId(job: Job) {
    if (job) {
      this.job = job;
    }
  }
  @Input() mode = ViewMode.VIEW;


  @Output() closedModalJob = new EventEmitter<boolean>();

  constructor() {
    this.isAlertActive = true;
    this.isModalActive = true;
  }

  ngOnInit() {
  }

  updateJob(job: Job) {
    this.job = job;
  }

  formCancel() {
    this.isAlertActive = false;
    this.closedModalJob.emit(false);
  }

  close() {
    this.isModalActive = false;
  }

}
