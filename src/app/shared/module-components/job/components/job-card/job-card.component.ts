import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../entities/job';
import { ViewMode } from '../../../../../core/enums/view-mode.enum';
import { JobService } from '../../../../../core/services/job/job.service';
import { MessageService } from 'primeng/api';
import { HttpErrorService } from '../../../../../core/services/http-error/http-error.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  disabledButtonView = false;
  disabledButtonEdit = false;
  disabledButtonRemove = false;

  // Confirm
  isConfirmActive = false;

  // Modal job
  isModalJobActive: boolean;
  mode: number;

  // Modal result
  isModalResultActive: boolean;

  job: Job;
  counters: any;

  @Input() showButtons = true;
  @Input() isClicker = false;
  @Input('job') set setJob(job: Job) {
    if (job) {
      this.job = job;
      this.calculateDataInfo();
    }
  }
  @Input('mode') set setMode(mode: number) {
    if (mode) {
      this.mode = mode;
    }
  }

  @Output() emitSelected = new EventEmitter<Job>();
  @Output() emitEdit = new EventEmitter<Job>();
  @Output() emitRemoved = new EventEmitter<Job>();
  @Output() emitJob = new EventEmitter<Job>();
  @Output() emitSavedJob = new EventEmitter<Job>();

  constructor(private jobService: JobService,
              private messageService: MessageService,
              private httpError: HttpErrorService,
              public translate: TranslateService) { }

  ngOnInit() {
  }

  calculateDataInfo() {
    const counters = { total: 0, running: 0, error: 0, completed: 0, percent: 0 };
    let percentAcum = 0;
    let numAlgorithm = 0;
    if (this.job) {
      const dataAlgorithms = this.job.dataAlgorithms;
      // tslint:disable-next-line: forin
      for (const key in dataAlgorithms) {
        if (dataAlgorithms.hasOwnProperty(key)) {
          const algorit = dataAlgorithms[key];
          if (algorit) {
            if (algorit.algorithm) { numAlgorithm++; }
            if (algorit.algorithm && algorit.task) { percentAcum += algorit.task.percentageCompleted; }

            if (algorit.algorithm && algorit.task && algorit.model && algorit.task.status === 'COMPLETED') {
              counters.total = counters.total + 1;
              counters.completed = counters.completed + 1;
            } else if (algorit.algorithm && algorit.task) {
              if (algorit.task.status === 'RUNNING') {
                counters.total = counters.total + 1;
                counters.running = counters.running + 1;
              } else if (algorit.task.status === 'COMPLETED') {
                counters.total = counters.total + 1;
                counters.completed = counters.completed + 1;
              } else if (algorit.task.status === 'ERROR') {
                counters.total = counters.total + 1;
                counters.error = counters.error + 1;
              }
            } else if (algorit.algorithm) {
              counters.total = counters.total + 1;
            }
          }
        }
      }
      if (percentAcum > 0 && numAlgorithm > 0) { counters.percent = Number((percentAcum / numAlgorithm).toFixed(0)); }
    }
    this.counters = counters;
  }

  select() {
    this.emitSelected.emit(this.job);
    this.mode = ViewMode.VIEW;
    this.isModalJobActive = true;
  }

  edit() {
    this.emitEdit.emit(this.job);
    this.mode = ViewMode.EDIT;
    this.isModalJobActive = true;
  }

  keypress() {
    this.emitJob.emit(this.job);
  }

  // Modal Job
  closeModalJob(event: boolean) {
    this.isModalJobActive = event;
  }

  savedJob(job: Job) {
    this.emitSavedJob.emit(job);
    // this.isModalJobActive = false;
  }

  // Confirm
  removeConfirm() {
    this.isConfirmActive = true;
  }

  openResult() {
    this.isModalResultActive = true;
  }

  // Modal result
  closeModalResult(event: boolean) {
    this.isModalResultActive = event;
  }

  remove() {
    this.jobService.deleteJob(this.job).subscribe(
      job => {
        this.messageService.add({severity: 'success', detail: this.translate.instant('menssageToast.removedCorrectly')});
        this.emitRemoved.emit(this.job);
      },
      err => {
        this.httpError.checkError(err,
          this.translate.instant('alerts.alert'),
          this.translate.instant('jobCard.msgAlertErrorRemoveJob'));

      }
    );
    this.isConfirmActive = false;
  }

  removeCancel() {
    this.isConfirmActive = false;
  }

}
