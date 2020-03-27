export class FormDataset {

    public description: string;
    public file: File;

    constructor(data?: any) {
        this.description = data && data.description ? data.description : '';
        this.file = data && data.file ? data.file : null;
    }
}
