import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-administration-users-page',
  templateUrl: './administration-users-page.component.html',
  styleUrls: ['./administration-users-page.component.css']
})
export class AdministrationUsersPageComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
