import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContainerAws } from '../../entities/container-aws';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-containers-aws-list',
  templateUrl: './containers-aws-list.component.html',
  styleUrls: ['./containers-aws-list.component.css']
})
export class ContainersAwsListComponent implements OnInit {

  containersAws: ContainerAws[];
  @Input('containersAws') set setContainersAws(containersAws: ContainerAws[]) {
    if (containersAws) {
      this.containersAws = containersAws;
    }
  }

  @Output() containerAwsRemoved = new EventEmitter<ContainerAws>();

  constructor(public translate: TranslateService) {
    this.containersAws = [];
  }

  ngOnInit() {
  }

  removeContainerAws(containerAws: ContainerAws) {
    this.containerAwsRemoved.emit(containerAws);
  }

}
