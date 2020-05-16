import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-container-list-page',
  templateUrl: './container-list-page.component.html',
  styleUrls: ['./container-list-page.component.css']
})
export class ContainerListPageComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
