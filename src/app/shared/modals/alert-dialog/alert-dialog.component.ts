import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { AlertService } from '../../../core/services/alert/alert.service';
import { Observable } from 'rxjs';
import { Alert } from 'src/app/core/entities/generic/alert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit, DoCheck {

  title: string;
  message: string;
  redirect: string;
  isAlertActive: boolean;
  isModalActive: boolean;
  private dataAlert$: Observable<Alert>;
  textShowMoreCollapse: string;
  textShowLessCollapse: string;
  textToShowCollapse: string;

  constructor(private alert: AlertService,
              private router: Router) {
    this.isModalActive = false;
  }

  ngOnInit() {
    this.dataAlert$ = this.alert.getDataAlert$();
    this.dataAlert$.subscribe( (dataAlert: Alert) => {
      this.title = dataAlert.title;
      this.message = dataAlert.message;
      this.redirect = dataAlert.redirect;
      this.textToShowCollapse = dataAlert.showMore;
      this.isAlertActive = dataAlert.activated;
      this.isModalActive = dataAlert.activated;
    });
  }

  ngDoCheck() {
    this.textShowMoreCollapse = 'Mostrar más'; // this.translate.instant('general.showMore'); // TODO: Traducir
    this.textShowLessCollapse = 'Mostrar menos'; // this.translate.instant('general.showLess'); // TODO: Traducir
  }

  close() {
    this.isModalActive = false;
    this.redirectTo();
  }

  emitAccept() {
    this.alert.closeAlert();
  }

  redirectTo() {
    if (this.redirect !== '') {
      // this.router.navigate([this.redirect]);
      this.router.navigateByUrl(`/${ this.redirect }`);
    }
  }
}
