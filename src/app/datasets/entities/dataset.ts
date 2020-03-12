export class Dataset {
    constructor(public id: string = '',
                public description: string = '',
                public file: string = '',
                public name: string = '',
                public extension: string = '',
                public fullName: string = '',
                public dateCreation: Date = null,
                public size: string = '') {

    }
}
