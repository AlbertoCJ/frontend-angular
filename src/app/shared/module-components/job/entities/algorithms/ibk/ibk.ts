import { Algorithms } from '../../../enums/algorithms.enum';
export class Ibk {

    id: number;
    name: string;
    endpoint: string;
    config: any;
    errorList: string[];

    constructor(data?: any) {
        this.id = data && data.id ? data.id : Algorithms.IBK;
        this.name = data && data.name ? data.name : 'IBk';
        this.endpoint = data && data.endpoint ? data.endpoint : 'IBk';
        this.config = data && data.config ? data.config : this.dataConfig();
        this.errorList = data && data.errorList ? data.errorList : [];
    }

    dataConfig() {
        return {
            windowSize: '0', /* Gets the maximum number of instances allowed in the training pool. The
                             addition of new instances above this value will result in old instances being
                             removed. A value of 0 signifies no limit to the number of training
                             instances. Must be 0 or 1 (Default: 0). */
            KNN: '1', /* The number of neighbors to use. Must be an integer greater than 0 (Default: 1). */
            crossValidate: '0', /* Whether hold-one-out cross-validation will be used to select the
                                best k value. Must be 0 or 1 (Default: 0). */
            distanceWeighting: '0', /* May be 0 for no distance weighting, I for 1/distance or F for
                                     1-distance. Must be 0, I or F (Default: 0) */
            meanSquared: '0', /* Whether the mean squared error is used rather than mean absolute error when
                              doing cross-validation for regression problems. Must be 0 or 1 (Default: 0). */
            nearestNeighbourSearchAlgorithm: 'LinearNNSearch', /* The nearest neighbour search algorithm to
                                            use (Default: weka.core.neighboursearch.LinearNNSearch). Fixed. */
            validation: 'CrossValidation', // "CrossValidation" y "Hold-Out"
            validationNum: '10' // min = 0, max = 100
        };
    }
}
