import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../entities/job';
import { ViewMode } from '../../../../../core/enums/view-mode.enum';
import { JobService } from '../../../../../core/services/job/job.service';
import { MessageService } from 'primeng/api';
import { HttpErrorService } from '../../../../../core/services/http-error/http-error.service';

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
  titleConfirm = 'Aviso'; // TODO: Traducir
  messageConfirm = 'Se eliminara permanentemente. ¿Estás seguro?'; // TODO: Traducir

  // Modal job
  isModalActive: boolean;
  mode: number;

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
              private httpError: HttpErrorService) { }

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

            if (algorit.algorithm && algorit.task && algorit.model && algorit.task.hasStatus === 'COMPLETED') {
              counters.total = counters.total + 1;
              counters.completed = counters.completed + 1;
            } else if (algorit.algorithm && algorit.task) {
              if (algorit.task.hasStatus === 'RUNNING') {
                counters.total = counters.total + 1;
                counters.running = counters.running + 1;
              } else if (algorit.task.hasStatus === 'ERROR') {
                counters.total = counters.total + 1;
                counters.error = counters.error + 1;
              }
            }
          }
        }
      }
      if (percentAcum > 0 && numAlgorithm > 0) { counters.percent = percentAcum / numAlgorithm; }
    }
    this.counters = counters;
  }

  select() {
    this.emitSelected.emit(this.job);
    this.mode = ViewMode.VIEW;
    this.isModalActive = true;
  }

  edit() {
    this.emitEdit.emit(this.job);
    this.mode = ViewMode.EDIT;
    this.isModalActive = true;
  }

  keypress() {
    this.emitJob.emit(this.job);
  }

  // Modal
  closeModalJob(event: boolean) {
    this.isModalActive = event;
  }

  savedJob(job: Job) {
    this.emitSavedJob.emit(job);
  }

  // Confirm
  removeConfirm() {
    this.isConfirmActive = true;
  }

  remove() {
    this.jobService.deleteJob(this.job.id).subscribe(
      job => {
        this.messageService.add({severity: 'success', detail: 'Eliminado correctamente'}); // TODO: Traducir
        this.emitRemoved.emit(this.job);
      },
      err => {
        this.httpError.checkError(err, 'Alerta', 'Error al borrar job'); // TODO: Traducir

      }
    );
    this.isConfirmActive = false;
  }

  removeCancel() {
    this.isConfirmActive = false;
  }

}
