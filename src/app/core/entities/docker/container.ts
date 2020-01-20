import { ContainerPort } from './container-port';

export class Container {

    id: string;
    imagenName: string;
    created: string;
    state: string;
    ports: ContainerPort[];

    constructor(item?: any) {
        this.id = item && item.Id ? item.Id : '';
        this.imagenName = item && item.Image ? item.Image : '';
        this.created = item && item.Created ? item.Created : '';
        this.state = item && item.State ? item.State : '';
        this.ports = item && item.Ports ? item.Ports.map( port => new ContainerPort(port)) : [];
    }
}
