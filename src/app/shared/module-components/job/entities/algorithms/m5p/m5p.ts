import { Algorithms } from '../../../enums/algorithms.enum';
export class M5p {

    id: number;
    name: string;
    endpoint: string;
    config: any;
    errorList: string[];

    constructor(data?: any) {
        this.id = data && data.id ? data.id : Algorithms.M5P;
        this.name = data && data.name ? data.name : 'M5P';
        this.endpoint = data && data.endpoint ? data.endpoint : 'M5P';
        this.config = data && data.config ? data.config : this.dataConfig();
        this.errorList = data && data.errorList ? data.errorList : [];
    }

    dataConfig() {
        return {
            unpruned: '0', // Whether unpruned tree to be generated. Values '0' o '1'
            useUnsmoothed: '0', // Whether to use unsmoothed predictions. Values '0' o '1'
            minNumInstances: '4', // The minimum number of instances to allow at a leaf node.
            buildRegressionTree: '0', // Whether to generate a regression tree/rule instead of a model tree/rule.  Values '0' o '1'
            validation: 'CrossValidation', // "CrossValidation" y "Hold-Out"
            validationNum: '10' // min = 0, max = 100
        };
    }
}
