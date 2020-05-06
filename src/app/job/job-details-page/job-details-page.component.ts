import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../shared/module-components/job/entities/job';

@Component({
  selector: 'app-job-details-page',
  templateUrl: './job-details-page.component.html',
  styleUrls: ['./job-details-page.component.css']
})
export class JobDetailsPageComponent implements OnInit {

  jobId: string;
  jobTitle: string;

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(param => {
      this.jobId = param.id;
      this.jobTitle = '';
    });
  }

  ngOnInit() {
  }

  jobData(job: Job) {
    this.jobTitle = `Job: ${ job.name }`; // Traducir
  }

  backDashboard() {
    this.router.navigate(['dashboard']);
  }

}
