import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../entities/task';
import { Model } from '../../entities/model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-algorithm-details-info',
  templateUrl: './algorithm-details-info.component.html',
  styleUrls: ['./algorithm-details-info.component.css']
})
export class AlgorithmDetailsInfoComponent implements OnInit {

  // algorithm: any;
  // task: Task;

  @Input() algorithm: any;
  @Input() task: Task;
  @Input() model: Model;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
