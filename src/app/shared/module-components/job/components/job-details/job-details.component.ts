import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../entities/job';
import { ViewMode } from '../../../../../core/enums/view-mode.enum';
import { TranslateService } from '@ngx-translate/core';
import { AwsContainerService } from '../../../../../core/services/aws-container/aws-container.service';
import { HttpErrorService } from '../../../../../core/services/http-error/http-error.service';


@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  job: Job;
  awsContainerOwn: any[]; // TODO: crear objeto

  @Input('job') set setJob(job: Job) {
    if (job) {
      this.job = job;
      this.getAwsContainersOwn();
    }
  }
  @Input() mode = ViewMode.VIEW;

  @Output() emitJob = new EventEmitter<Job>();

  constructor(public translate: TranslateService,
              private awsContainerService: AwsContainerService,
              private httpError: HttpErrorService) { }

  ngOnInit() {
  }

  updateJob(job: Job) {
    this.emitJob.emit(job);
  }

  getAwsContainersOwn() {
    this.awsContainerService.getAwsContainersOwn(this.job.id).subscribe(
      awsContainerOwn => {
        this.awsContainerOwn = awsContainerOwn;
      },
      err => {
        this.httpError.checkError(err,
          this.translate.instant('alerts.alert'),
          'Error al obtener contenedores AWS'); // TODO: Traducir
          // this.translate.instant('configLocalWorkers.msgAlertErrorGetContainersLocal'));
      }
    );
  }


}
