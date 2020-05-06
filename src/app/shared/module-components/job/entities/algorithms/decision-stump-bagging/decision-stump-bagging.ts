import { Algorithms } from '../../../enums/algorithms.enum';
export class DecisionStumpBagging {

    id: number;
    name: string;
    endpoint: string;
    config: any;
    errorList: string[];

    constructor(data?: any) {
        this.id = data && data.id ? data.id : Algorithms.DECISION_STUMP_BAGGING;
        this.name = data && data.name ? data.name : 'Decision Stump Bagging';
        this.endpoint = data && data.endpoint ? data.endpoint : 'DecisionStump/bagging';
        this.config = data && data.config ? data.config : this.dataConfig();
        this.errorList = data && data.errorList ? data.errorList : [];
    }

    dataConfig() {
        return {
            bagSizePercent: '100', // Bagging: Size of each bag, as a percentage of the training set size.
            batchSize: '100', /* Bagging: The preferred number of instances to process if batch prediction is
                                being performed. More or fewer instances may be provided, but this gives implementations a
                                chance to specify a preferred batch size. */
            numIterations: '10', // Bagging: The number of iterations to be performed.
            validation: 'CrossValidation', // "CrossValidation" y "Hold-Out"
            validationNum: '10' // min = 0, max = 100
        };
    }
}
