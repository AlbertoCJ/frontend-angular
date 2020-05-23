export class Time {
    id: string;
    user: string;
    jobName: string;
    jobDescription: string;
    dateCreation: Date;
    start: Date;
    end: Date;
    hasStatus: string;

    constructor(data?: any) {
        this.id = data && data._id ? data._id : '';
        this.user = data && data.user ? data.user : '';
        this.jobName = data && data.jobName ? data.jobName : '';
        this.jobDescription = data && data.jobDescription ? data.jobDescription : '';
        this.dateCreation = data && data.dateCreation ? data.dateCreation : null;
        this.start = data && data.start ? data.start : null;
        this.end = data && data.end ? data.end : null;
        this.hasStatus = data && data.hasStatus ? data.hasStatus : '';
    }
}
