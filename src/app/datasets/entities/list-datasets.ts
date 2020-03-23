import { Dataset } from './dataset';
import { ListGeneric } from '../../core/entities/generic/list-generic';

export class ListDatasets extends ListGeneric {

    public datasets: Dataset[];

    constructor(data?: any) {
        super(data);
        this.datasets = data && data.docs && data.docs.length > 0 ? data.docs.map(dataset => new Dataset(dataset)) : [] ;
    }

}
