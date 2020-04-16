import { PaginationData } from './pagination-data';
export class ListGeneric {

    public paginationData: PaginationData;

    constructor(data?: any) {
        this.paginationData = data ? new PaginationData(data) : null;
    }

}
