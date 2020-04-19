import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JobService } from '../../../../../core/services/job/job.service';
import { MessageService } from 'primeng/api';
import { AlertService } from '../../../../../core/services/alert/alert.service';
import { Job } from '../../entities/job';
import { ViewMode } from '../../../../../core/enums/view-mode.enum';

@Component({
  selector: 'app-controller-job-details',
  templateUrl: './controller-job-details.component.html',
  styleUrls: ['./controller-job-details.component.css']
})
export class ControllerJobDetailsComponent implements OnInit {

  viewMode = ViewMode;
  job: Job;

  @Input() jobId: string;
  @Input() mode = ViewMode.VIEW;

  @Output() emitJob = new EventEmitter<Job>();
  @Output() emitCancel = new EventEmitter<string>();

  constructor(private jobService: JobService,
              private messageService: MessageService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.getJob();
  }

  getJob() {
    this.jobService.getJob(this.jobId).subscribe(
      job => {
        this.job = job;
        this.emitJob.emit(this.job);
      },
      err => {
        this.alertService.setAlertShowMore('Alerta', 'Error al obtener el job.', err.message);
      }
  );
  }

  // Buttons
  btnSaveClicked() {
    alert('Saved');
    // this.mode = ViewMode.VIEW;
  }

  btnCancelClicked() {
    this.emitCancel.emit('Backed');
    // this.mode = ViewMode.VIEW;
  }

  btnBackClicked() {
    this.emitCancel.emit('Backed');
  }

}
