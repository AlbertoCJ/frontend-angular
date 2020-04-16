import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Steps } from '../../enums/steps.enum';
import { Algorithms } from '../../enums/algorithms.enum';
import { LinearRegression } from '../../entities/algorithms/linear-regression/linear-regression';
import { LinearRegressionBagging } from '../../entities/algorithms/linear-regression-bagging/linear-regression-bagging';
import { Ibk } from '../../entities/algorithms/ibk/ibk';

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
    linearRegression: {
      algorithm: null
    },
    linearRegressionBagging: {
      algorithm: null
    },
    IBk: {
      algorithm: null
    },
    ZeroR: {
      algorithm: null
    },
    M5P: {
      algorithm: null
    },
    M5Rules: {
      algorithm: null
    },
    DecisionStump: {
      algorithm: null
    },
    DecisionStumpBagging: {
      algorithm: null
    },
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
          this.listAlgorithms.linearRegression.algorithm = new LinearRegression();
        } else {
          this.listAlgorithms.linearRegression.algorithm = null;
        }
        break;
      case Algorithms.LINEAR_REGRESSION_BAGGING:
        if (event) {
          this.listAlgorithms.linearRegressionBagging.algorithm = new LinearRegressionBagging();
        } else {
          this.listAlgorithms.linearRegressionBagging.algorithm = null;
        }
        break;
      case Algorithms.IBK:
        if (event) {
          this.listAlgorithms.IBk.algorithm = new Ibk();
        } else {
          this.listAlgorithms.IBk.algorithm = null;
        }
        // if (!this.IBkCheckBox) { this.listAlgorithms.IBk.algorithm = undefined; }
        break;
      case Algorithms.ZEROR:
        if (!this.ZeroRCheckBox) { this.listAlgorithms.ZeroR.algorithm = undefined; }
        break;
      case Algorithms.M5P:
        if (!this.M5PCheckBox) { this.listAlgorithms.M5P.algorithm = undefined; }
        break;
      case Algorithms.M5RULES:
        if (!this.M5RulesCheckBox) { this.listAlgorithms.M5Rules.algorithm = undefined; }
        break;
      case Algorithms.DECISION_STUMP:
        if (!this.DecisionStumpCheckBox) { this.listAlgorithms.DecisionStump.algorithm = undefined; }
        break;
      case Algorithms.DECISION_STUMP_BAGGING:
        if (!this.DecisionStumpBaggingCheckBox) { this.listAlgorithms.DecisionStumpBagging.algorithm = undefined; }
        break;
    }
  }

  isAnyAlgorithms() {
    if (this.listAlgorithms.linearRegression.algorithm ||
      this.listAlgorithms.linearRegressionBagging.algorithm ||
      this.listAlgorithms.IBk.algorithm ||
      this.listAlgorithms.ZeroR.algorithm ||
      this.listAlgorithms.M5P.algorithm ||
      this.listAlgorithms.M5Rules.algorithm ||
      this.listAlgorithms.DecisionStump.algorithm ||
      this.listAlgorithms.DecisionStumpBagging.algorithm) {
      return true;
    }
    return false;
  }

  // Changes in algorithms
  onChangeLinearRegression(linearRegression: LinearRegression) {
    this.listAlgorithms.linearRegression.algorithm = linearRegression;
  }

  onChangeLinearRegressionBagging(linearRegressionBagging: LinearRegressionBagging) {
    this.listAlgorithms.linearRegressionBagging.algorithm = linearRegressionBagging;
  }

  onChangeIBk(ibk: Ibk) {
    this.listAlgorithms.Ibk.algorithm = ibk;
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
