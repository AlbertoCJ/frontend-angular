import { Task } from './task';
import { Model } from './model';
import { Algorithms } from '../enums/algorithms.enum';
import { LinearRegression } from './algorithms/linear-regression/linear-regression';
import { LinearRegressionBagging } from './algorithms/linear-regression-bagging/linear-regression-bagging';
export class DataAlgorithms {

    linearRegression: any;
    linearRegressionBagging: any;
    IBk: any;
    ZeroR: any;
    M5P: any;
    M5Rules: any;
    DecisionStump: any;
    DecisionStumpBagging: any;

    constructor(data?: any) {
        // tslint:disable-next-line: max-line-length
        this.linearRegression = data && data.linearRegression ? this.generateAlgorithmsData(data.linearRegression, Algorithms.LINEAR_REGRESSION) : null;
        // tslint:disable-next-line: max-line-length
        this.linearRegressionBagging = data && data.linearRegressionBagging ? this.generateAlgorithmsData(data.linearRegressionBagging, Algorithms.LINEAR_REGRESSION_BAGGING) : null;
        this.IBk = data && data.IBk ? this.generateAlgorithmsData(data.IBk, Algorithms.IBK) : null;
        this.ZeroR = data && data.ZeroR ? this.generateAlgorithmsData(data.ZeroR, Algorithms.ZEROR) : null;
        this.M5P = data && data.M5P ? this.generateAlgorithmsData(data.M5P, Algorithms.M5P) : null;
        this.M5Rules = data && data.M5Rules ? this.generateAlgorithmsData(data.M5Rules, Algorithms.M5RULES) : null;
        this.DecisionStump = data && data.DecisionStump ? this.generateAlgorithmsData(data.DecisionStump, Algorithms.DECISION_STUMP) : null;
        // tslint:disable-next-line: max-line-length
        this.DecisionStumpBagging = data && data.DecisionStumpBagging ? this.generateAlgorithmsData(data.DecisionStumpBagging, Algorithms.DECISION_STUMP_BAGGING) : null;
    }

    generateAlgorithmsData(algorit: any, enumAlgorith: number) {
        return {
            algorithm: algorit && algorit.algorithm ? this.algorithm(algorit.algorithm, enumAlgorith) : null,
            task: algorit && algorit.task ? new Task(algorit.task) : null,
            model: algorit && algorit.model ? new Model(algorit.model) : null
        };
    }

    algorithm(algorithm: any, enumAlgorith: number) {
        let algorithmNew = null;
        switch (enumAlgorith) {
            case 1:
                algorithmNew = new LinearRegression(algorithm);
                break;
            case 2:
                algorithmNew = new LinearRegressionBagging(algorithm);
                break;
            case 3:
                // algorithmNew =
                break;
            case 4:
                // algorithmNew =
                break;
            case 5:
                // algorithmNew =
                break;
            case 6:
                // algorithmNew =
                break;
            case 7:
                // algorithmNew =
                break;
            case 8:
                // algorithmNew =
                break;
        }
        return algorithmNew;
    }
}
