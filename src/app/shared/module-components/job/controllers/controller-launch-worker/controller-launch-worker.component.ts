import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Steps } from '../../enums/steps.enum';
import { LocalWorkers } from '../../entities/workers/local-workers';
import { ZoneLaunch } from '../../enums/zoneLaunch.enum';
import { DataAlgorithms } from '../../entities/data-algorithms';
import { TranslateService } from '@ngx-translate/core';
import { AwsWorkers } from '../../entities/workers/aws-workers';

@Component({
  selector: 'app-controller-launch-worker',
  templateUrl: './controller-launch-worker.component.html',
  styleUrls: ['./controller-launch-worker.component.css']
})
export class ControllerLaunchWorkerComponent implements OnInit {

  public zoneLaunch = ZoneLaunch;
  showView: number; // 1 = aws, 2 = local

  dataWorkers: LocalWorkers | AwsWorkers;

  btnPrevDisabled: boolean;
  btnNextDisabled: boolean;
  isAllowNext = false;

  @Input() listAlgorithms: DataAlgorithms;

  @Output() emitStep = new EventEmitter<number>();
  @Output() emitDataWorkers = new EventEmitter<LocalWorkers | AwsWorkers>();

  constructor(public translate: TranslateService) {
    this.showView = ZoneLaunch.AWS;
    this.btnPrevDisabled = false;
    this.btnNextDisabled = true;
   }

  ngOnInit() {
  }

  selectZoneLaunch(zoneLaunch: number) {
    this.showView = zoneLaunch;
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

  setAwsWorkers(awsWorkers: AwsWorkers) {
    this.dataWorkers = awsWorkers;
    this.validNumContainer();
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
