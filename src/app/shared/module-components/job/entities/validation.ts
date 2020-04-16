export class Validation {

    meanAbsoluteError: number;
    meanPriorAbsoluteError: number;
    relativeAbsoluteError: number;
    rootMeanPriorSquaredError: number;
    rootMeanSquaredError: number;
    rootRelativeSquaredError: number;
    weightedPrecision: number;
    error: string;

    constructor(data?: any) {
        this.meanAbsoluteError = data && data.meanAbsoluteError ? data.meanAbsoluteError : 0;
        this.meanPriorAbsoluteError = data && data.meanPriorAbsoluteError ? data.meanPriorAbsoluteError : 0;
        this.relativeAbsoluteError = data && data.relativeAbsoluteError ? data.relativeAbsoluteError : 0;
        this.rootMeanPriorSquaredError = data && data.rootMeanPriorSquaredError ? data.rootMeanPriorSquaredError : 0;
        this.rootMeanSquaredError = data && data.rootMeanSquaredError ? data.rootMeanSquaredError : 0;
        this.rootRelativeSquaredError = data && data.rootRelativeSquaredError ? data.rootRelativeSquaredError : 0;
        this.weightedPrecision = data && data.weightedPrecision ? data.weightedPrecision : 0;
        this.error = data && data.error ? data.error : '';

    }
}
