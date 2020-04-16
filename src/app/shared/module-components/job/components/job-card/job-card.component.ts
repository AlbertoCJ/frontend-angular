import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../entities/job';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  disabledButtonView = false;
  disabledButtonEdit = false;
  disabledButtonRemove = false;

  isAlertActive: boolean;
  isModalActive: boolean; // TODO: pasar a componente jobModal

  @Input() showButtons = true;
  @Input() isClicker = false;
  @Input() job: Job;

  @Output() emitSelected = new EventEmitter<Job>();
  @Output() emitEdit = new EventEmitter<Job>();
  @Output() emitRemoved = new EventEmitter<Job>();

  constructor() { }

  ngOnInit() {
  }

  select() {
    this.emitSelected.emit(this.job);
    this.isAlertActive = true;
    this.isModalActive = true;
  }

  edit() {
    this.emitEdit.emit(this.job);
  }

  remove() {
    this.emitRemoved.emit(this.job);
  }

  emitCancel() { // TODO: pasar a componente jobModal
    // this.cancel.emit('cancel');
  }

  formCancel() {
    this.isAlertActive = false;
  }

  close() {
    this.isModalActive = false;
  }

}
