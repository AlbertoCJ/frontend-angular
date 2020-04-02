import { ZoneLaunch } from '../../enums/zoneLaunch.enum';
export class GenericWorkers {

    zoneLaunch: number;

    constructor(data?: any) {
        this.zoneLaunch = data && data.zoneLaunch ? data.zoneLaunch : ZoneLaunch.AWS;
    }
}
