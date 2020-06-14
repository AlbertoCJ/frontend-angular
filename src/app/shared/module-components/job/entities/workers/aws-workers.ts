import { GenericWorkers } from './generic-workers';

export class AwsWorkers extends GenericWorkers {

    numContainers: number;

    constructor(data?: any) {
        super(data);
        this.numContainers = data && data.numContainers ? data.numContainers : 0;
    }
}
