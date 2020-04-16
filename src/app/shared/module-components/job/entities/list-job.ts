import { ListGeneric } from '../../../../core/entities/generic/list-generic';
import { Job } from './job';

export class ListJob extends ListGeneric {

    public jobs: Job[];

    constructor(data?: any) {
        super(data);
        this.jobs = data && data.docs && data.docs.length > 0 ? data.docs.map(job => new Job(job)) : [] ;
    }
}
