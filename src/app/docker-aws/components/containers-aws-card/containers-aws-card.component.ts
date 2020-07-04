import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContainerAws } from '../../entities/container-aws';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-containers-aws-card',
  templateUrl: './containers-aws-card.component.html',
  styleUrls: ['./containers-aws-card.component.css']
})
export class ContainersAwsCardComponent implements OnInit {

  containerAws: ContainerAws;
  @Input('containerAws') set setContainerAws(containerAws: ContainerAws) {
    if (containerAws) {
      this.containerAws = containerAws;
    }
  }

  @Output() removed = new EventEmitter<string>();

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

  removeContainerAws() {
    this.removed.emit(this.containerAws.applicationName);
  }

}
