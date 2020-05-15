import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-algorithm-details-title',
  templateUrl: './algorithm-details-title.component.html',
  styleUrls: ['./algorithm-details-title.component.css']
})
export class AlgorithmDetailsTitleComponent implements OnInit {

  @Input() title: string;
  @Input() percent: number;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
