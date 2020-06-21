import { Component, OnInit, Input } from '@angular/core';
import { ContainerAwsStatus } from '../../entities/container-aws-status';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-container-aws-status-card',
  templateUrl: './container-aws-status-card.component.html',
  styleUrls: ['./container-aws-status-card.component.css']
})
export class ContainerAwsStatusCardComponent implements OnInit {

  @Input() container: ContainerAwsStatus;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
