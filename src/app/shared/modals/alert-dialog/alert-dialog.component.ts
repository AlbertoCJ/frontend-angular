import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../core/services/alert/alert.service';
import { Observable } from 'rxjs';
import { Alert } from 'src/app/core/entities/generic/alert';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {

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
              private router: Router,
              public translate: TranslateService) {
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
