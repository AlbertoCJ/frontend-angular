import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-datasets-list-page',
  templateUrl: './datasets-list-page.component.html',
  styleUrls: ['./datasets-list-page.component.css']
})
export class DatasetsListPageComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
