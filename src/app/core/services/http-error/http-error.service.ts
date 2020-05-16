import { Injectable } from '@angular/core';
import { AlertService } from '../alert/alert.service';
import { AuthService } from '../auth/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  constructor(private alertService: AlertService,
              private auth: AuthService,
              private translate: TranslateService) { }

  checkError(err, title, message) {
    switch (err.status) {
      case 401:
        this.auth.removeToken();
        this.alertService.setAlertRedirect(this.translate.instant('alerts.alert'),
        this.translate.instant('login.msgAlertErrorTokenExpired'),
          'login');
        break;

      default:
        this.alertService.setAlertShowMore(title, message, err.error && err.error.message ? err.error.message : '');
        break;
    }
  }
}
