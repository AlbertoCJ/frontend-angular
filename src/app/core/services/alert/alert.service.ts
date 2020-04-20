import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Alert } from '../../entities/generic/alert';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private dataAlert: Alert;

  private dataAlert$ = new Subject<Alert>();

  constructor() {
    this.dataAlert = new Alert();
  }

  setAlert(title: string, message: string) { // Inicia alerta
    this.dataAlert = new Alert({ activated: true, title, message });
    this.nextDataAlert(this.dataAlert);
  }

  setAlertRedirect(title: string, message: string, redirect: string) { // Inicia alerta y redirecciona
    this.dataAlert = new Alert({ activated: true, title, message, redirect });
    this.nextDataAlert(this.dataAlert);
  }

  setAlertShowMore(title: string, message: string, showMore: string) { // Inicia alerta con mostrar mas
    this.dataAlert = new Alert({ activated: true, title, message, showMore });
    this.nextDataAlert(this.dataAlert);
  }

  setTitleAlert(title: string) { // Inicia alerta solo titulo
    this.dataAlert = new Alert({ activated: true, title, message: '' });
    this.nextDataAlert(this.dataAlert);
  }

  setMessageAlert(message: string) { // Inicia alerta solo mensaje
    this.dataAlert = new Alert({ activated: true, title: '', message });
    this.nextDataAlert(this.dataAlert);
  }

  nextDataAlert(dataAlert) {
    this.dataAlert$.next(dataAlert);
  }

  getDataAlert$(): Observable<Alert> {
    return this.dataAlert$.asObservable();
  }

  closeAlert() {
    this.dataAlert = new Alert();
    this.nextDataAlert(this.dataAlert);
  }
}
