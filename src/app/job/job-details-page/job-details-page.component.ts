import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-details-page',
  templateUrl: './job-details-page.component.html',
  styleUrls: ['./job-details-page.component.css']
})
export class JobDetailsPageComponent implements OnInit {

  jobId: string;

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(param => {
      this.jobId = param.id;
    });
  }

  ngOnInit() {
  }

  backDashboard() {
    this.router.navigate(['dashboard']);
  }

}
