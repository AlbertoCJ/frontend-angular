import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../shared/module-components/job/entities/job';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-job-details-page',
  templateUrl: './job-details-page.component.html',
  styleUrls: ['./job-details-page.component.css']
})
export class JobDetailsPageComponent implements OnInit {

  jobId: string;
  jobTitle: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public translate: TranslateService) {
    this.route.params.subscribe(param => {
      this.jobId = param.id;
      this.jobTitle = '';
    });
  }

  ngOnInit() {
  }

  jobData(job: Job) {
    this.jobTitle = `${ this.translate.instant('jobDetailsPage.textJob') } ${ job.name }`;
  }

  backHome() {
    this.router.navigate(['home']);
  }

}
