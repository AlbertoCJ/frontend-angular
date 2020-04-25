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
  @Output() emitSaved = new EventEmitter<Job>();
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

  updateJob() {
    this.jobService.updateJob(this.job).subscribe(
      job => {
        this.messageService.add({severity: 'success', detail: 'Guardado correctamente'}); // TODO: Traducir
        this.job = job;
        this.emitSaved.emit(this.job);
      },
      err => {
        this.httpError.checkError(err, 'Alerta', 'Error al guardar el job.'); // TODO: Traducir
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
