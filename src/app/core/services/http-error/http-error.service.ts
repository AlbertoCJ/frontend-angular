import { Injectable } from '@angular/core';
import { AlertService } from '../alert/alert.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  constructor(private alertService: AlertService,
              private auth: AuthService) { }

  checkError(err, title, message) {
    switch (err.status) {
      case 401:
        this.auth.removeToken();
        this.alertService.setAlertRedirect('Alerta', 'El token a caducado. Debes logearte de nuevo.', 'login'); // TODO: Traducir
        break;

      default:
        this.alertService.setAlertShowMore(title, message, err.message);
        break;
    }
  }
}
