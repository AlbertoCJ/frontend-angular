export class ContainerAws {

    applicationName: string;
    dateCreated: Date;
    CNAME: string;
    endpointURL: string;
    environmentId: string;
    environmentName: string;
    health: string;
    healthStatus: string;
    status: string;
    versionLabel: string;

    constructor(item?: any) {
        this.applicationName = item && item.ApplicationName ? item.ApplicationName : '';
        this.dateCreated = item && item.DateCreated ? new Date(item.DateCreated) : null;
        this.CNAME = item && item.CNAME ? item.CNAME : '';
        this.endpointURL = item && item.EndpointURL ? item.EndpointURL : '';
        this.environmentId = item && item.EnvironmentId ? item.EnvironmentId : '';
        this.environmentName = item && item.EnvironmentName ? item.EnvironmentName : '';
        this.health = item && item.Health ? item.Health : '';
        this.healthStatus = item && item.HealthStatus ? item.HealthStatus : '';
        this.status = item && item.Status ? item.Status : '';
        this.versionLabel = item && item.VersionLabel ? item.VersionLabel : '';
    }
}
