export class User {

    id: string;
    email: string;
    password: string;
    name: string;
    role: string;
    state: boolean;
    dateCreation: Date;
    language: string;
    sendEmail: boolean;

    constructor(data?: any) {
        this.id = data && data._id ? data._id : '';
        this.email = data && data.email ? data.email : '';
        this.password = data && data.password ? data.password : '';
        this.name = data && data.name ? data.name : '';
        this.role = data && data.role ? data.role : '';
        this.state = data && data.state ? data.state : false;
        this.dateCreation = data && data.dateCreation ? data.dateCreation : null;
        this.language = data && data.language ? data.language : 'es';
        this.sendEmail = data && data.sendEmail ? data.sendEmail : false;
    }
}
