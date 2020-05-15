import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListJob } from '../../entities/list-job';
import { Job } from '../../entities/job';
import { JobService } from '../../../../../core/services/job/job.service';
import { HttpErrorService } from '../../../../../core/services/http-error/http-error.service';
import { GlobalConfigService } from '../../../../../core/services/global-config/global-config.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-controller-list-job-latests',
  templateUrl: './controller-list-job-latests.component.html',
  styleUrls: ['./controller-list-job-latests.component.css']
})
export class ControllerListJobLatestsComponent implements OnInit {

  limit: number;
  listJobLatests: ListJob;

  @Input() clickCard = false;
  @Input() showCardButtons = true;

  @Output() emitViewJob = new EventEmitter<Job>();
  @Output() emitEditJob = new EventEmitter<Job>();

  constructor(private jobService: JobService,
              private httpError: HttpErrorService,
              private globalConfigService: GlobalConfigService,
              public translate: TranslateService) {
    this.limit = this.globalConfigService.getGlobalConfigSessionStorage().showLists.home.showLatestsJobs;
    this.listJobLatests = new ListJob();
  }

  ngOnInit() {
    this.getListJobsLatests();
  }

  getListJobsLatests() {
    this.petitionListJobsLatests(this.limit);
  }

  petitionListJobsLatests(limit: number) {
    this.jobService.getListJobsLatests(limit).subscribe(
      listJobLatests => {
        this.listJobLatests = listJobLatests;
      },
      err => {
        this.httpError.checkError(err,
          this.translate.instant('alerts.alert'),
          this.translate.instant('controllerListJobLatests.msgAlertErrorGetListJobLatests'));
      }
  );
  }

  select(job: Job) {
    this.emitViewJob.emit(job);
  }

  edit(job: Job) {
    this.emitEditJob.emit(job);
  }

  removed(job: Job) {
    this.getListJobsLatests();
  }

}
