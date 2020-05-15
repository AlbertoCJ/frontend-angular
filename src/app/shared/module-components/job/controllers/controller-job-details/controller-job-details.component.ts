import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JobService } from '../../../../../core/services/job/job.service';
import { MessageService } from 'primeng/api';
import { Job } from '../../entities/job';
import { ViewMode } from '../../../../../core/enums/view-mode.enum';
import { HttpErrorService } from '../../../../../core/services/http-error/http-error.service';
import { TranslateService } from '@ngx-translate/core';

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
  @Output() emitSaved = new EventEmitter<Job>();
  @Output() emitCancel = new EventEmitter<string>();

  constructor(private jobService: JobService,
              private messageService: MessageService,
              private httpError: HttpErrorService,
              public translate: TranslateService) { }

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
        this.httpError.checkError(err,
          this.translate.instant('alerts.alert'),
          this.translate.instant('controllerJobDetails.msgAlertErrorGetJob'));
      }
    );
  }

  updateJob() {
    this.jobService.updateJob(this.job).subscribe(
      job => {
        this.messageService.add({severity: 'success',
          detail: this.translate.instant('menssageToast.storedCorrectly')});
        this.job = job;
        this.emitSaved.emit(this.job);
      },
      err => {
        this.httpError.checkError(err,
          this.translate.instant('alerts.alert'),
          this.translate.instant('controllerJobDetails.msgAlertErrorSaveJob'));
      }
    );
  }

  modificateJob(job: Job) {
    this.job = job;
  }

  // Buttons
  btnSaveClicked() {
    this.updateJob();
    // this.mode = ViewMode.VIEW;
  }

  btnCancelClicked() {
    this.mode = ViewMode.VIEW;
    this.emitCancel.emit('Backed');
  }

  btnBackClicked() {
    this.emitCancel.emit('Backed');
  }

}
