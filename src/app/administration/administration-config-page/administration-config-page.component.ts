import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-administration-config-page',
  templateUrl: './administration-config-page.component.html',
  styleUrls: ['./administration-config-page.component.css']
})
export class AdministrationConfigPageComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
