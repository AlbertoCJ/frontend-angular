import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-container-awslist-page',
  templateUrl: './container-awslist-page.component.html',
  styleUrls: ['./container-awslist-page.component.css']
})
export class ContainerAWSListPageComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
