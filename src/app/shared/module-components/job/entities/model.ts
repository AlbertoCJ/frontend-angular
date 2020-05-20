import { Validation } from './validation';
export class Model {

    meta: any;
    model: string | null;
    validation: Validation;
    prediction: number[] | null;

    constructor(data?: any) {
        this.meta = data && data.meta ? data.meta : null;
        this.model = data && data.model ? data.model : null;
        this.validation = data && data.validation ? new Validation(data.validation) : null;
        this.prediction = data && data.prediction ? data.prediction : null;
    }
}
