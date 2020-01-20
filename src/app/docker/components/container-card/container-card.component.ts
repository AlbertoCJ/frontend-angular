import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Container } from '../../../core/entities/docker/container';

@Component({
  selector: 'app-container-card',
  templateUrl: './container-card.component.html',
  styleUrls: ['./container-card.component.css']
})
export class ContainerCardComponent implements OnInit {
  // TODO: Mostrar el estado en el idioma elegido mediente un pipe
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

  constructor() {
    this.items = [];
   }

  ngOnInit() {
    if (this.container.state === 'running') {
      this.items.push(
        {label: 'Parar', icon: 'pi pi-power-off', command: () => {
          this.stopContainer();
        }}
      );
    }
    if (this.container.state === 'exited') {
      this.items.push(
        {label: 'Iniciar', icon: 'pi pi-refresh', command: () => {
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
