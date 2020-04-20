import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JobService } from '../../../../../core/services/job/job.service';
import { MessageService } from 'primeng/api';
import { Job } from '../../entities/job';
import { ViewMode } from '../../../../../core/enums/view-mode.enum';
import { HttpErrorService } from '../../../../../core/services/http-error/http-error.service';

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
              private httpError: HttpErrorService) { }

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
        this.httpError.checkError(err, 'Alerta', 'Error al obtener el job.'); // TODO: Traducir
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
