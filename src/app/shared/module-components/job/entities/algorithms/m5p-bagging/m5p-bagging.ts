import { Algorithms } from '../../../enums/algorithms.enum';
export class M5pBagging {

    id: number;
    name: string;
    endpoint: string;
    config: any;

    constructor(data?: any) {
        this.id = data && data.id ? data.id : Algorithms.M5P_BAGGING;
        this.name = data && data.name ? data.name : 'M5P Bagging';
        this.endpoint = data && data.endpoint ? data.endpoint : 'M5P/bagging';
        this.config = data && data.config ? data.config : this.dataConfig();
    }

    dataConfig() {
        return {
            bagSizePercent: '100', // Bagging: Size of each bag, as a percentage of the training set size.
            batchSize: '100', /* Bagging: The preferred number of instances to process if batch prediction is
                                being performed. More or fewer instances may be provided, but this gives implementations a
                                chance to specify a preferred batch size. */
            numIterations: '10', // Bagging: The number of iterations to be performed.
            unpruned: '0', // Whether unpruned tree to be generated. Values '0' o '1'
            useUnsmoothed: '0', // Whether to use unsmoothed predictions. Values '0' o '1'
            minNumInstances: '4', // The minimum number of instances to allow at a leaf node.
            buildRegressionTree: '0', // Whether to generate a regression tree/rule instead of a model tree/rule.  Values '0' o '1'
            validation: 'CrossValidation', // "CrossValidation" y "Hold-Out"
            validationNum: '10' // min = 0, max = 100
        };
    }
}
