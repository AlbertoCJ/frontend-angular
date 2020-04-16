export class PaginationData {

    public totalDocs: number;
    public limit: number;
    public totalPages: number;
    public page: number;
    public pagingCounter: number;
    public hasPrevPage: boolean;
    public hasNextPage: boolean;
    public prevPage: number | null;
    public nextPage: number | null;

    constructor(data?: any) {
        this.totalDocs = data && data.totalDocs ? data.totalDocs : 0;
        this.limit = data && data.limit ? data.limit : 0;
        this.totalPages = data && data.totalPages ? data.totalPages : 0;
        this.page = data && data.page ? data.page : 0;
        this.pagingCounter = data && data.pagingCounter ? data.pagingCounter : 0;
        this.hasPrevPage = data && data.hasPrevPage ? data.hasPrevPage : false;
        this.hasNextPage = data && data.hasNextPage ? data.hasNextPage : false;
        this.prevPage = data && data.prevPage ? data.prevPage : null;
        this.nextPage = data && data.nextPage ? data.nextPage : null;
    }
}
