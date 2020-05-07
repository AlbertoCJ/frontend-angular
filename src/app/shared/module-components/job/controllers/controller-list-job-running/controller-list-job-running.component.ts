import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListJob } from '../../entities/list-job';
import { Job } from '../../entities/job';
import { JobService } from '../../../../../core/services/job/job.service';
import { HttpErrorService } from '../../../../../core/services/http-error/http-error.service';

@Component({
  selector: 'app-controller-list-job-running',
  templateUrl: './controller-list-job-running.component.html',
  styleUrls: ['./controller-list-job-running.component.css']
})
export class ControllerListJobRunningComponent implements OnInit {

  page: number;
  limit: number;
  listJobRunning: ListJob;

  @Input() clickCard = false;
  @Input() showCardButtons = true;

  @Output() emitViewJob = new EventEmitter<Job>();
  @Output() emitEditJob = new EventEmitter<Job>();

  constructor(private jobService: JobService,
              private httpError: HttpErrorService) {
    this.page = 1;
    this.limit = 2;
    this.listJobRunning = new ListJob();
  }

  ngOnInit() {
    this.getListJobsRunning();
  }

  getListJobsRunning() {
    this.petitionListJobsRunning(this.page, this.limit);
  }

  petitionListJobsRunning(page: number, limit: number) {
    this.jobService.getListJobsRunning(page, limit).subscribe(
      listJobRunning => {
        this.listJobRunning = listJobRunning;
      },
      err => {
        this.httpError.checkError(err, 'Alerta', 'Error al obtener listado de jobs ejecutandose.'); // TODO: Traducir
      }
  );
  }

  select(job: Job) {
    this.emitViewJob.emit(job);
  }

  edit(job: Job) {
    this.emitEditJob.emit(job);
  }

  removed(job: Job) {
    this.getListJobsRunning();
  }

  changePage(page: number) {
    this.page = page;
    this.getListJobsRunning();
  }

}
