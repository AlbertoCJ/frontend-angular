import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-container-status-selected',
  templateUrl: './container-status-selected.component.html',
  styleUrls: ['./container-status-selected.component.css']
})
export class ContainerStatusSelectedComponent implements OnInit {

  types: SelectItem[];

  statusSelected: string;

  @Output() statusChanged = new EventEmitter<string>();

  constructor(public translate: TranslateService) {
    this.types = [
            {label: this.translate.instant('containerStatusSelected.labelStarted'), value: 'running'},
            {label: this.translate.instant('containerStatusSelected.labelStopped'), value: 'exited'},
            {label: this.translate.instant('containerStatusSelected.labelAll'), value: 'all'}
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
