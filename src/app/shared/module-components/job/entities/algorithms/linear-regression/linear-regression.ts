import { Algorithms } from '../../../enums/algorithms.enum';
export class LinearRegression {

    id: number;
    name: string;
    endpoint: string;
    config: any;
    status: string;
    errorList: string[];

    constructor(data?: any) {
        this.id = data && data.id ? data.id : Algorithms.LINEAR_REGRESSION;
        this.name = data && data.name ? data.name : 'Linear Regression';
        this.endpoint = data && data.endpoint ? data.endpoint : 'linearRegression';
        this.config = data && data.config ? data.config : this.dataConfig();
        this.status = data && data.status ? data.status : 'OK';
        this.errorList = data && data.errorList ? data.errorList : [];
    }

    dataConfig() {
        return {
            attributeSelectionMethod: '0', /* methods: attribute selection using M5's method (Value:0),
                                        no attribute selection(Value:1) and
                                        a greedy selection using the Akaike information metric(Value:2) */
            eliminateColinearAttributes: '1',
            validation: 'CrossValidation', // "CrossValidation" y "Hold-Out"
            validationNum: '10' // min = 0, max = 100
        };
    }
}
