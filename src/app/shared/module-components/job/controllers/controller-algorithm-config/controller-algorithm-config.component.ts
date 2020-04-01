import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Steps } from '../../enums/steps.enum';
import { SelectItem } from 'primeng/api/selectitem';
import { LinearRegression } from '../../entities/algorithms/linear-regression/linear-regression';
import { LinearRegressionBagging } from '../../entities/algorithms/linear-regression-bagging/linear-regression-bagging';
import { Algorithms } from '../../enums/algorithms.enum';

@Component({
  selector: 'app-controller-algorithm-config',
  templateUrl: './controller-algorithm-config.component.html',
  styleUrls: ['./controller-algorithm-config.component.css']
})
export class ControllerAlgorithmConfigComponent implements OnInit {

  showAlgoritConf: boolean;
  Algorithms = Algorithms;

  // CheckBox
  linearRegressionCheckBox = false;
  linearRegressionBaggingCheckBox = false;
  IBkCheckBox = false;
  ZeroRCheckBox = false;
  M5PCheckBox = false;
  M5RulesCheckBox = false;
  DecisionStumpCheckBox = false;
  DecisionStumpBaggingCheckBox = false;

  // Algorithms object
  listAlgorithms: any = {
    linearRegression: undefined,
    linearRegressionBagging: undefined,
    IBk: undefined,
    ZeroR: undefined,
    M5P: undefined,
    M5Rules: undefined,
    DecisionStump: undefined,
    DecisionStumpBagging: undefined,
  };

  // Buttons
  btnPrevDisabled: boolean;
  btnNextDisabled: boolean;

  @Output() emitStep = new EventEmitter<number>();
  @Output() emitListAlgorithms = new EventEmitter<any>();

  constructor() {
    this.showAlgoritConf = false;
    this.btnPrevDisabled = false;
    this.btnNextDisabled = false;
   }

  ngOnInit() {
  }

  clickCheckAlgorithm(event: boolean, idAlgorithm: number) {
    switch (idAlgorithm) {
      case Algorithms.LINEAR_REGRESSION:
        if (event) {
          this.listAlgorithms.linearRegression = new LinearRegression();
        } else {
          this.listAlgorithms.linearRegression = undefined;
        }
        break;
      case Algorithms.LINEAR_REGRESSION_BAGGING:
        if (event) {
          this.listAlgorithms.linearRegressionBagging = new LinearRegressionBagging();
        } else {
          this.listAlgorithms.linearRegressionBagging = undefined;
        }
        break;
      case Algorithms.IBK:
        if (!this.IBkCheckBox) { this.listAlgorithms.IBk = undefined; }
        break;
      case Algorithms.ZEROR:
        if (!this.ZeroRCheckBox) { this.listAlgorithms.ZeroR = undefined; }
        break;
      case Algorithms.M5P:
        if (!this.M5PCheckBox) { this.listAlgorithms.M5P = undefined; }
        break;
      case Algorithms.M5RULES:
        if (!this.M5RulesCheckBox) { this.listAlgorithms.M5Rules = undefined; }
        break;
      case Algorithms.DECISION_STUMP:
        if (!this.DecisionStumpCheckBox) { this.listAlgorithms.DecisionStump = undefined; }
        break;
      case Algorithms.DECISION_STUMP_BAGGING:
        if (!this.DecisionStumpBaggingCheckBox) { this.listAlgorithms.DecisionStumpBagging = undefined; }
        break;
    }
  }

  isAnyAlgorithms() {
    if (this.listAlgorithms.linearRegression ||
      this.listAlgorithms.linearRegressionBagging ||
      this.listAlgorithms.IBk ||
      this.listAlgorithms.ZeroR ||
      this.listAlgorithms.M5P ||
      this.listAlgorithms.M5Rules ||
      this.listAlgorithms.DecisionStump ||
      this.listAlgorithms.DecisionStumpBagging) {
      return true;
    }
    return false;
  }

  // Changes in algorithms
  onChangeLinearRegression(linearRegression: LinearRegression) {
    this.listAlgorithms.linearRegression = linearRegression;
  }

  onChangeLinearRegressionBagging(linearRegressionBagging: LinearRegressionBagging) {
    this.listAlgorithms.linearRegressionBagging = linearRegressionBagging;
  }

  // Emit y buttons
  emitListAlgorithmsInternal() {
    this.emitListAlgorithms.emit(this.listAlgorithms);
  }

  btnPrevClicked() {
    this.emitListAlgorithmsInternal();
    this.emitStep.emit(Steps.DATASET);
  }

  btnNextClicked() {
    this.emitListAlgorithmsInternal();
    this.emitStep.emit(Steps.WORKERS);
  }

}
