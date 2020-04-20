import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../entities/job';
import { ViewMode } from '../../../../../core/enums/view-mode.enum';

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
    this.mode = ViewMode.VIEW;
    this.isModalActive = true;
  }

  edit() {
    this.emitEdit.emit(this.job);
    this.mode = ViewMode.EDIT;
    this.isModalActive = true;
  }

  // Modal
  closeModalJob(event: boolean) {
    this.isModalActive = event;
  }

  // Confirm
  removeConfirm() {
    this.isConfirmActive = true;
  }

  remove() {
    this.emitRemoved.emit(this.job);
    this.isConfirmActive = false;
  }

  removeCancel() {
    this.isConfirmActive = false;
  }

}
