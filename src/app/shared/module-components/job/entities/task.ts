export class Task {

    taskID: string | null;
    date: Date | null;
    errorReport: string | null;
    uri: string | null;
    status: string | null;
    URI: string | null;
    resultURI: string | null;
    creator: string | null;
    step: string | null;
    title: string | null;
    hasStatus: string | null;
    description: string | null;
    percentageCompleted: number;

    constructor(data?: any) {
        this.taskID = data && data.taskID ? data.taskID : null;
        this.date = data && data.date ? data.date : null;
        this.errorReport = data && data.errorReport ? data.errorReport : null;
        this.uri = data && data.uri ? data.uri : null;
        this.status = data && data.status ? data.status : null;
        this.URI = data && data.URI ? data.URI : null;
        this.resultURI = data && data.resultURI ? data.resultURI : null;
        this.creator = data && data.creator ? data.creator : null;
        this.step = data && data.step ? data.step : null;
        this.title = data && data.title ? data.title : null;
        this.hasStatus = data && data.hasStatus ? data.hasStatus : null;
        this.description = data && data.description ? data.description : null;
        this.percentageCompleted = data && data.percentageCompleted ? data.percentageCompleted : 0;
    }
}
