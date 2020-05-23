import { ListGeneric } from '../../core/entities/generic/list-generic';
import { Time } from './time';

export class ListTimes extends ListGeneric {
    public times: Time[];

    constructor(data?: any) {
        super(data);
        this.times = data && data.docs && data.docs.length > 0 ? data.docs.map(time => new Time(time)) : [] ;
    }
}
