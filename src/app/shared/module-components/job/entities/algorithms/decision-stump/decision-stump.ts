import { Algorithms } from '../../../enums/algorithms.enum';
export class DecisionStump {

    id: number;
    name: string;
    endpoint: string;
    config: any;

    constructor(data?: any) {
        this.id = data && data.id ? data.id : Algorithms.DECISION_STUMP;
        this.name = data && data.name ? data.name : 'Decision Stump';
        this.endpoint = data && data.endpoint ? data.endpoint : 'DecisionStump';
        this.config = data && data.config ? data.config : this.dataConfig();
    }

    dataConfig() {
        return {
            validation: 'CrossValidation', // "CrossValidation" y "Hold-Out"
            validationNum: '10' // min = 0, max = 100
        };
    }
}
