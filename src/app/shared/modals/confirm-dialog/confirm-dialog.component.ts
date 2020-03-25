import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  title: string;
  message: string;
  isModalActive: boolean;

  @Input('isConfirmActive') set confirmActive(option: boolean) {
    this.isModalActive = option || false;
  }
  @Input('title') set setTitle(title: string) {
    if (title) {
      this.title = title;
    }
  }
  @Input('message') set setMessage(message: string) {
    if (message) {
      this.message = message;
    }
  }
  @Output() confirm = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<string>();

  constructor() {
    this.isModalActive = true;
   }

  ngOnInit() {
  }

  emitConfirm() {
    this.confirm.emit('accept');
  }

  emitCancel() {
    this.cancel.emit('cancel');
  }

}
