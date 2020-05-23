import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../entities/job';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-modal-job-result',
  templateUrl: './modal-job-result.component.html',
  styleUrls: ['./modal-job-result.component.css']
})
export class ModalJobResultComponent implements OnInit {

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

  @Output() closedModalResult = new EventEmitter<boolean>();

  constructor(public translate: TranslateService) {
    this.isAlertActive = true;
    this.isModalActive = true;
  }

  ngOnInit() {
  }

  formCancel() {
    this.closedModalResult.emit(false);
    this.isAlertActive = false;
  }

  close() {
    this.isModalActive = false;
  }

}
