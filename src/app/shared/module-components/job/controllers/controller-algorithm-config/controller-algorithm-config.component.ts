import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Steps } from '../../enums/steps.enum';
import { Algorithms } from '../../enums/algorithms.enum';
import { LinearRegression } from '../../entities/algorithms/linear-regression/linear-regression';
import { LinearRegressionBagging } from '../../entities/algorithms/linear-regression-bagging/linear-regression-bagging';
import { Ibk } from '../../entities/algorithms/ibk/ibk';
import { Zeror } from '../../entities/algorithms/zeror/zeror';
import { M5p } from '../../entities/algorithms/m5p/m5p';
import { M5rules } from '../../entities/algorithms/m5rules/m5rules';
import { DecisionStump } from '../../entities/algorithms/decision-stump/decision-stump';
import { DecisionStumpBagging } from '../../entities/algorithms/decision-stump-bagging/decision-stump-bagging';

@Component({
  selector: 'app-controller-algorithm-config',
  templateUrl: './controller-algorithm-config.component.html',
  styleUrls: ['./controller-algorithm-config.component.css']
})
export class ControllerAlgorithmConfigComponent implements OnInit {

  showAlgoritConf: boolean;
  Algorithms = Algorithms;

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
        break;
      case Algorithms.ZEROR:
        if (event) {
          this.listAlgorithms.ZeroR.algorithm = new Zeror();
        } else {
          this.listAlgorithms.ZeroR.algorithm = null;
        }
        break;
      case Algorithms.M5P:
        if (event) {
          this.listAlgorithms.M5P.algorithm = new M5p();
        } else {
          this.listAlgorithms.M5P.algorithm = null;
        }
        break;
      case Algorithms.M5RULES:
        if (event) {
          this.listAlgorithms.M5Rules.algorithm = new M5rules();
        } else {
          this.listAlgorithms.M5Rules.algorithm = null;
        }
        break;
      case Algorithms.DECISION_STUMP:
        if (event) {
          this.listAlgorithms.DecisionStump.algorithm = new DecisionStump();
        } else {
          this.listAlgorithms.DecisionStump.algorithm = null;
        }
        break;
      case Algorithms.DECISION_STUMP_BAGGING:
        if (event) {
          this.listAlgorithms.DecisionStumpBagging.algorithm = new DecisionStumpBagging();
        } else {
          this.listAlgorithms.DecisionStumpBagging.algorithm = null;
        }
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

  onChangeZeror(zeror: Zeror) {
    this.listAlgorithms.ZeroR.algorithm = zeror;
  }

  onChangeM5p(m5p: M5p) {
    this.listAlgorithms.M5P.algorithm = m5p;
  }

  onChangeM5rules(m5rules: M5rules) {
    this.listAlgorithms.M5Rules.algorithm = m5rules;
  }

  onChangeDecisionStump(decisionStump: DecisionStump) {
    this.listAlgorithms.DecisionStump.algorithm = decisionStump;
  }

  onChangeDecisionStumpBagging(decisionStumpBagging: DecisionStumpBagging) {
    this.listAlgorithms.DecisionStumpBagging.algorithm = decisionStumpBagging;
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
