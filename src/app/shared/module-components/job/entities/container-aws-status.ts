export class ContainerAwsStatus {

    id: string;
    aplicationName: string;
    status: string;

    constructor(data?: any) {
        this.id = data && data._id ? data._id : '';
        this.aplicationName = data && data.Application_name ? data.Application_name : '';
        this.status = data && data.Status ? data.Status : '';
    }
}
