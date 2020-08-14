export class ContainerAws {

    // applicationName: string;
    // dateCreated: Date;
    // CNAME: string;
    // endpointURL: string;
    // environmentId: string;
    // environmentName: string;
    // health: string;
    // healthStatus: string;
    // status: string;
    // versionLabel: string;

    // constructor(item?: any) {
    //     this.applicationName = item && item.ApplicationName ? item.ApplicationName : '';
    //     this.dateCreated = item && item.DateCreated ? new Date(item.DateCreated) : null;
    //     this.CNAME = item && item.CNAME ? item.CNAME : '';
    //     this.endpointURL = item && item.EndpointURL ? item.EndpointURL : '';
    //     this.environmentId = item && item.EnvironmentId ? item.EnvironmentId : '';
    //     this.environmentName = item && item.EnvironmentName ? item.EnvironmentName : '';
    //     this.health = item && item.Health ? item.Health : '';
    //     this.healthStatus = item && item.HealthStatus ? item.HealthStatus : '';
    //     this.status = item && item.Status ? item.Status : '';
    //     this.versionLabel = item && item.VersionLabel ? item.VersionLabel : '';
    // }

    id: string;
    applicationName: string;
    environmentName: string[];
    health: string;
    healthStatus: string;
    status: string;
    endpointURL: string;
    jobId: string;
    userId: string;
    dateCreation: Date;
    working: boolean;
    dateWorkEnd: Date;

    constructor(item?: any) {
        this.id = item && item._id ? item._id : '';
        this.applicationName = item && item.Application_name ? item.Application_name : '';
        this.environmentName = item && item.Environment_name && Array.isArray(item.Environment_name) ? item.Environment_name : [];
        this.health = item && item.Health ? item.Health : '';
        this.healthStatus = item && item.HealthStatus ? item.HealthStatus : '';
        this.status = item && item.Status ? item.Status : '';
        this.endpointURL = item && item.Endpoint_URL ? item.Endpoint_URL : '';
        this.jobId = item && item.Job_id ? item.Job_id : '';
        this.userId = item && item.User_id ? item.User_id : '';
        this.dateCreation = item && item.Date_creation ? new Date(item.Date_creation) : null;
        this.working = item && item.Working ? item.Working : false;
        this.dateWorkEnd = item && item.Date_work_end ? new Date(item.Date_work_end) : null;
    }
}
