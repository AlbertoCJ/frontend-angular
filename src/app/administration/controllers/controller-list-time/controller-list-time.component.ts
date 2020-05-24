import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../core/entities/user/user';
import { ListTimes } from '../../entities/list-times';
import { TimeService } from '../../../core/services/time/time.service';
import { HttpErrorService } from '../../../core/services/http-error/http-error.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-controller-list-time',
  templateUrl: './controller-list-time.component.html',
  styleUrls: ['./controller-list-time.component.css']
})
export class ControllerListTimeComponent implements OnInit {

  page: number;
  limit: number;
  listTimes: ListTimes;

  @Input() user: User;

  constructor(private timeService: TimeService,
              private httpError: HttpErrorService,
              public translate: TranslateService) {
    this.page = 1;
    this.limit = 4;
    this.listTimes = new ListTimes();
   }

   ngOnInit() {
    this.getListTimes();
  }

  getListTimes() {
    this.petitionListTimes(this.page, this.limit);
  }

  petitionListTimes(page: number, limit: number) {
    this.timeService.getListTime(this.user.id, page, limit).subscribe(
      listTimes => {
        this.listTimes = listTimes;
      },
      err => {
        this.httpError.checkError(err,
          this.translate.instant('alerts.alert'),
          this.translate.instant('controllerListTime.messageErrorGetListTime'));
      }
  );
  }

  // PAGINATION
  changePage(page: number) {
    this.page = page;
    this.getListTimes();
  }

}
