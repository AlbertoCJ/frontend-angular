import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LocalWorkers } from '../../entities/workers/local-workers';
import { ZoneLaunch } from '../../enums/zoneLaunch.enum';

@Component({
  selector: 'app-config-local-workers',
  templateUrl: './config-local-workers.component.html',
  styleUrls: ['./config-local-workers.component.css']
})
export class ConfigLocalWorkersComponent implements OnInit {

  containersForm: FormGroup;
  localWorkers: LocalWorkers;

  @Output() emitLocalWorkers = new EventEmitter<LocalWorkers>();

  constructor(private fb: FormBuilder) {
    this.containersForm = this.fb.group({
      numContainers: [0]
    });
    this.localWorkers = new LocalWorkers({ zoneLaunch: ZoneLaunch.LOCAL });
    // Form change emit
    this.containersForm.valueChanges.subscribe(data => {
      this.localWorkers.numContainers = this.containersForm.value.numContainers;
      this.emitLocalWorkers.emit(this.localWorkers);
    });
   }

  ngOnInit() {
    this.emitLocalWorkers.emit(this.localWorkers);
  }

}
