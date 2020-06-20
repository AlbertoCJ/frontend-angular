import { Algorithms } from '../../../enums/algorithms.enum';
export class LinearRegressionBagging {

    id: number;
    name: string;
    endpoint: string;
    config: any;
    status: string;
    errorList: string[];

    constructor(data?: any) {
        this.id = data && data.id ? data.id : Algorithms.LINEAR_REGRESSION_BAGGING;
        this.name = data && data.name ? data.name : 'Linear Regression Bagging';
        this.endpoint = data && data.endpoint ? data.endpoint : 'linearRegression/bagging';
        this.config = data && data.config ? data.config : this.dataConfig();
        this.status = data && data.status ? data.status : 'OK';
        this.errorList = data && data.errorList ? data.errorList : [];
    }

    dataConfig() {
        return {
            bagSizePercent: '100', // Bagging: Size of each bag, as a percentage of the training set size.
            batchSize: '100', /* Bagging: The preferred number of instances to process if batch prediction is
                                being performed. More or fewer instances may be provided, but this gives implementations a
                                chance to specify a preferred batch size. */
            numIterations: '10', // Bagging: The number of iterations to be performed.
            attributeSelectionMethod: '0', /* methods: attribute selection using M5's method (Value:0),
                                        no attribute selection(Value:1) and
                                        a greedy selection using the Akaike information metric(Value:2) */
            eliminateColinearAttributes: '1', // "0", "1"
            validation: 'CrossValidation', // "CrossValidation" y "Hold-Out"
            validationNum: '10' // min = 0, max = 100
        };
    }
}
