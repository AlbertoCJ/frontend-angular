import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Container } from '../../entities';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-container-card',
  templateUrl: './container-card.component.html',
  styleUrls: ['./container-card.component.css']
})
export class ContainerCardComponent implements OnInit {

  items: MenuItem[];
  container: Container;
  @Input('container') set setContainer(container: Container) {
    if (container) {
      this.container = container;
    }
  }

  @Output() removed = new EventEmitter<string>();
  @Output() started = new EventEmitter<string>();
  @Output() stopped = new EventEmitter<string>();

  constructor(public translate: TranslateService) {
    this.items = [];
   }

  ngOnInit() {
    if (this.container.state === 'running') {
      this.items.push(
        {label: this.translate.instant('containerCard.labelStop'), icon: 'pi pi-power-off', command: () => {
          this.stopContainer();
        }}
      );
    }
    if (this.container.state === 'exited') {
      this.items.push(
        {label: this.translate.instant('containerCard.labelStart'), icon: 'pi pi-refresh', command: () => {
          this.startContainer();
        }}
      );
    }
  }

  removeContainer() {
    this.removed.emit(this.container.id);
  }

  startContainer() {
    this.started.emit(this.container.id);
  }

  stopContainer() {
    this.stopped.emit(this.container.id);
  }

}
