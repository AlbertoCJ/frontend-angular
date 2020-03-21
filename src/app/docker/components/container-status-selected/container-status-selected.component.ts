import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-container-status-selected',
  templateUrl: './container-status-selected.component.html',
  styleUrls: ['./container-status-selected.component.css']
})
export class ContainerStatusSelectedComponent implements OnInit {

  types: SelectItem[];

  statusSelected: string;

  @Output() statusChanged = new EventEmitter<string>();

  constructor() {
    this.types = [
            {label: 'Iniciadas', value: 'running'},
            {label: 'Paradas', value: 'exited'},
            // {label: 'Creadas', value: 'created', icon: 'fa fa-fw fa-cc-paypal'},
            // {label: 'Pausadas', value: 'paused', icon: 'fa fa-fw fa-cc-paypal'},
            // {label: 'Reiniciadas', value: 'restarting', icon: 'fa fa-fw fa-cc-paypal'},
            // {label: 'Eliminadas', value: 'removing', icon: 'fa fa-fw fa-cc-paypal'},
            // {label: 'Muertas', value: 'dead', icon: 'fa fa-fw fa-cc-paypal'},
            {label: 'Todas', value: 'all'}
        ];
   }

  ngOnInit() {
    this.statusSelected = 'running';
    this.onChangeType('running');
  }

  onChangeType(state) {
    this.statusChanged.emit(this.statusSelected);
  }

}
