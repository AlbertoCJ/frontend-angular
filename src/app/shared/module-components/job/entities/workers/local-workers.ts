import { GenericWorkers } from './generic-workers';

export class LocalWorkers extends GenericWorkers {

    numContainers: number;

    constructor(data?: any) {
        super(data);
        this.numContainers = data && data.numContainers ? data.numContainers : 0;
    }
}
