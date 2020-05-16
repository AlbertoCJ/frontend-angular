import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Container } from '../../entities';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-containers-list',
  templateUrl: './containers-list.component.html',
  styleUrls: ['./containers-list.component.css']
})
export class ContainersListComponent implements OnInit {

  containers: Container[];
  @Input('containers') set setContainers(containers: Container[]) {
    if (containers) {
      this.containers = containers;
    }
  }

  @Output() containerRemoved = new EventEmitter<string>();
  @Output() containerStarted = new EventEmitter<string>();
  @Output() containerStopped = new EventEmitter<string>();

  constructor(public translate: TranslateService) {
    this.containers = [];
  }

  ngOnInit() {
  }

  removeContainer(id: string) {
    this.containerRemoved.emit(id);
  }

  startContainer(id: string) {
    this.containerStarted.emit(id);
  }

  stopContainer(id: string) {
    this.containerStopped.emit(id);
  }

}
