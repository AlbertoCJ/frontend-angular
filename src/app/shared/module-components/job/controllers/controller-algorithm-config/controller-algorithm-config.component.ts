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
import { M5pBagging } from '../../entities/algorithms/m5p-bagging/m5p-bagging';
import { Libsvm } from '../../entities/algorithms/libsvm/libsvm';
import { LibsvmBagging } from '../../entities/algorithms/libsvm-bagging/libsvm-bagging';
import { DataAlgorithms } from '../../entities/data-algorithms';
import { GlobalConfigService } from '../../../../../core/services/global-config/global-config.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-controller-algorithm-config',
  templateUrl: './controller-algorithm-config.component.html',
  styleUrls: ['./controller-algorithm-config.component.css']
})
export class ControllerAlgorithmConfigComponent implements OnInit {

  showAlgoritConf: boolean;
  Algorithms = Algorithms;
  gcAlgorithms: any;

  // Algorithms object
  listAlgorithms: DataAlgorithms;

  // Buttons
  btnPrevDisabled: boolean;
  btnNextDisabled: boolean;

  @Output() emitStep = new EventEmitter<number>();
  @Output() emitListAlgorithms = new EventEmitter<any>();

  constructor(private globalConfigService: GlobalConfigService,
              public translate: TranslateService) {
    this.listAlgorithms = new DataAlgorithms();
    this.showAlgoritConf = false;
    this.btnPrevDisabled = false;
    this.btnNextDisabled = false;
    this.gcAlgorithms = this.globalConfigService.getGlobalConfigSessionStorage().algorithms;
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
      case Algorithms.M5P_BAGGING:
        if (event) {
          this.listAlgorithms.M5PBagging.algorithm = new M5pBagging();
        } else {
          this.listAlgorithms.M5PBagging.algorithm = null;
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
      case Algorithms.LIBSVM:
        if (event) {
          this.listAlgorithms.Libsvm.algorithm = new Libsvm();
        } else {
          this.listAlgorithms.Libsvm.algorithm = null;
        }
        break;
      case Algorithms.LIBSVM_BAGGING:
        if (event) {
          this.listAlgorithms.LibsvmBagging.algorithm = new LibsvmBagging();
        } else {
          this.listAlgorithms.LibsvmBagging.algorithm = null;
        }
        break;
    }
  }

  isAnyAlgorithms() {
    if (this.listAlgorithms.linearRegression && this.listAlgorithms.linearRegression.algorithm ||
      this.listAlgorithms.linearRegressionBagging && this.listAlgorithms.linearRegressionBagging.algorithm ||
      this.listAlgorithms.IBk && this.listAlgorithms.IBk.algorithm ||
      this.listAlgorithms.ZeroR && this.listAlgorithms.ZeroR.algorithm ||
      this.listAlgorithms.M5P && this.listAlgorithms.M5P.algorithm ||
      this.listAlgorithms.M5PBagging && this.listAlgorithms.M5PBagging.algorithm ||
      this.listAlgorithms.M5Rules && this.listAlgorithms.M5Rules.algorithm ||
      this.listAlgorithms.DecisionStump && this.listAlgorithms.DecisionStump.algorithm ||
      this.listAlgorithms.DecisionStumpBagging && this.listAlgorithms.DecisionStumpBagging.algorithm ||
      this.listAlgorithms.Libsvm && this.listAlgorithms.Libsvm.algorithm ||
      this.listAlgorithms.LibsvmBagging && this.listAlgorithms.LibsvmBagging.algorithm) {
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
    this.listAlgorithms.IBk.algorithm = ibk;
  }

  onChangeZeror(zeror: Zeror) {
    this.listAlgorithms.ZeroR.algorithm = zeror;
  }

  onChangeM5p(m5p: M5p) {
    this.listAlgorithms.M5P.algorithm = m5p;
  }

  onChangeM5pBagging(m5pBagging: M5pBagging) {
    this.listAlgorithms.M5PBagging.algorithm = m5pBagging;
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

  onChangeLibsvm(libsvm: Libsvm) {
    this.listAlgorithms.Libsvm.algorithm = libsvm;
  }

  onChangeLibsvmBagging(libsvmBagging: LibsvmBagging) {
    this.listAlgorithms.LibsvmBagging.algorithm = libsvmBagging;
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
