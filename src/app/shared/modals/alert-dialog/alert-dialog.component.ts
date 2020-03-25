import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { AlertService } from '../../../core/services/alert/alert.service';
import { Observable } from 'rxjs';
import { Alert } from 'src/app/core/entities/generic/alert';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit, DoCheck {

  title: string;
  message: string;
  isModalActive: boolean;
  private dataAlert$: Observable<Alert>;
  textShowMoreCollapse: string;
  textShowLessCollapse: string;
  textToShowCollapse: string;

  constructor(private alert: AlertService) {
    this.isModalActive = false;
  }

  ngOnInit() {
    this.dataAlert$ = this.alert.getDataAlert$();
    this.dataAlert$.subscribe( (dataAlert: Alert) => {
      this.title = dataAlert.title;
      this.message = dataAlert.message;
      this.isModalActive = dataAlert.activated;
      this.textToShowCollapse = dataAlert.showMore;
    });
  }

  ngDoCheck() {
    this.textShowMoreCollapse = 'Mostrar más'; // this.translate.instant('general.showMore');
    this.textShowLessCollapse = 'Mostrar menos'; // this.translate.instant('general.showLess');
  }

  emitAccept() {
    this.alert.closeAlert();
  }
}
