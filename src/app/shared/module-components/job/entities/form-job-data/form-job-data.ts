export class FormJobData {

    public name: string;
    public description: string;

    constructor(data?: any) {
        this.name = data && data.name ? data.name : '';
        this.description = data && data.description ? data.description : '';
    }

}
