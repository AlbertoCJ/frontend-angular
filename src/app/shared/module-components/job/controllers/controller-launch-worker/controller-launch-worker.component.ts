import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Steps } from '../../enums/steps.enum';
import { LocalWorkers } from '../../entities/workers/local-workers';
import { ZoneLaunch } from '../../enums/zoneLaunch.enum';

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

  @Output() emitStep = new EventEmitter<number>();
  @Output() emitDataWorkers = new EventEmitter<LocalWorkers>(); // TODO: Falta AwsWorker

  constructor() {
    this.showView = ZoneLaunch.LOCAL;
    this.btnPrevDisabled = false;
    this.btnNextDisabled = true;
   }

  ngOnInit() {
  }

  validNumContainer() {
    if (this.dataWorkers.numContainers === 0) {
      this.btnNextDisabled = true;
    } else {
      this.btnNextDisabled = false;
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
