import { DataAlgorithms } from './data-algorithms';

export class Job {

    id: number;
    hasStatus: string | null;
    error: string | null;
    name: string;
    description: string;
    dateCreation: Date | null;
    dataAlgorithms: DataAlgorithms;

    constructor(data?: any) {
        this.id = data && data._id ? data._id : 0;
        this.hasStatus = data && data.hasStatus ? data.hasStatus : null;
        this.error = data && data.error ? data.error : null;
        this.name = data && data.name ? data.name : '';
        this.description = data && data.description ? data.description : '';
        this.dateCreation = data && data.dateCreation ? data.dateCreation : null;
        this.dataAlgorithms = data && data.dataAlgorithms ? new DataAlgorithms(data.dataAlgorithms) : null;
    }
}
