import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Steps } from '../../enums/steps.enum';
import { LocalWorkers } from '../../entities/workers/local-workers';
import { ZoneLaunch } from '../../enums/zoneLaunch.enum';
import { DataAlgorithms } from '../../entities/data-algorithms';

@Component({
  selector: 'app-controller-launch-worker',
  templateUrl: './controller-launch-worker.component.html',
  styleUrls: ['./controller-launch-worker.component.css']
})
export class ControllerLaunchWorkerComponent implements OnInit {

  showView: number; // 1 = aws, 2 = local

  dataWorkers: LocalWorkers; // TODO: Falta AwsWorker

  btnPrevDisabled: boolean;
  btnNextDisabled: boolean;
  isAllowNext = false;

  @Input() listAlgorithms: DataAlgorithms;

  @Output() emitStep = new EventEmitter<number>();
  @Output() emitDataWorkers = new EventEmitter<LocalWorkers>(); // TODO: Falta AwsWorker

  constructor() {
    this.showView = ZoneLaunch.LOCAL;
    this.btnPrevDisabled = false;
    this.btnNextDisabled = true;
   }

  ngOnInit() {
  }

  allowNext(event: boolean) {
    this.isAllowNext = event;
    this.validNumContainer();
  }

  validNumContainer() {
    if (this.isAllowNext || this.dataWorkers.numContainers > 0) {
      this.btnNextDisabled = false;
    } else {
      this.btnNextDisabled = true;
    }
  }

  setLocalWorkers(localWorkers: LocalWorkers) {
    this.dataWorkers = localWorkers;
    this.validNumContainer();
  }

  btnPrevClicked() {
    this.emitStep.emit(Steps.ALGORITHM);
    this.emitDataWorkers.emit(this.dataWorkers);
  }

  btnNextClicked() {
    this.emitStep.emit(Steps.CONFIRM);
    this.emitDataWorkers.emit(this.dataWorkers);
  }

}
