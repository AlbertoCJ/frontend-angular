export class Dataset {

    public id: string;
    public description: string;
    public file: string;
    public name: string;
    public extension: string;
    public fullName: string;
    public dateCreation: Date;
    public size: string;

    constructor(data?: any) {
        this.id = data && data._id ? data._id : '';
        this.description = data && data.description ? data.description : '';
        this.file = data && data.file ? data.file : '';
        this.name = data && data.name ? data.name : '';
        this.extension = data && data.extension ? data.extension : '';
        this.fullName = data && data.full_name ? data.full_name : '';
        this.dateCreation = data && data.date_creation ? data.date_creation : null;
        this.size = data && data.size ? data.size : '';
    }
}
