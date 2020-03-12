export class ContainerPort {
    ip: string;
    privatePort: number;
    publicPort: number;
    type: string;
    constructor(item?: any) {
        this.ip = item && item.IP ? this.checkIP(item.IP) : '';
        this.privatePort = item && item.PrivatePort ? item.PrivatePort : 0;
        this.publicPort = item && item.PublicPort ? item.PublicPort : 0;
        this.type = item && item.Type ? item.Type : '';
    }

    private checkIP(ip) {
        return ip === '0.0.0.0' ? 'localhost' : ip ;
    }
}
