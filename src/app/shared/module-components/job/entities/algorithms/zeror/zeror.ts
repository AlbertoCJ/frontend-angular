import { Algorithms } from '../../../enums/algorithms.enum';
export class Zeror {

    id: number;
    name: string;
    endpoint: string;
    config: any;
    errorList: string[];

    constructor(data?: any) {
        this.id = data && data.id ? data.id : Algorithms.ZEROR;
        this.name = data && data.name ? data.name : 'ZeroR';
        this.endpoint = data && data.endpoint ? data.endpoint : 'ZeroR';
        this.config = data && data.config ? data.config : this.dataConfig();
        this.errorList = data && data.errorList ? data.errorList : [];
    }

    dataConfig() {
        return {
            validation: 'CrossValidation', // "CrossValidation" y "Hold-Out"
            validationNum: '10' // min = 0, max = 100
        };
    }
}
