import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-datasets-upload-page',
  templateUrl: './datasets-upload-page.component.html',
  styleUrls: ['./datasets-upload-page.component.css']
})
export class DatasetsUploadPageComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
