import { DataAlgorithms } from './data-algorithms';

export class Job {

    id: string;
    hasStatus: string | null;
    errorList: string[];
    name: string;
    description: string;
    dateCreation: Date | null;
    dataAlgorithms: DataAlgorithms;
    platform: string;
    timeId: string;

    constructor(data?: any) {
        this.id = data && data._id ? data._id : '';
        this.hasStatus = data && data.hasStatus ? data.hasStatus : null;
        this.errorList = data && data.errorList ? data.errorList : [];
        this.name = data && data.name ? data.name : '';
        this.description = data && data.description ? data.description : '';
        this.dateCreation = data && data.dateCreation ? data.dateCreation : null;
        this.dataAlgorithms = data && data.dataAlgorithms ? new DataAlgorithms(data.dataAlgorithms) : null;
        this.platform = data && data.platform ? data.platform : '';
        this.timeId = data && data.time ? data.time : '';
    }
}
