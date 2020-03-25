export class Alert {
    activated: boolean;
    title: string;
    message: string;
    showMore: string;

    constructor(item?: any) {
        this.activated = item && item.activated ? item.activated : false;
        this.title = item && item.title ? item.title : '';
        this.message = item && item.message ? item.message : '';
        this.showMore = item && item.showMore ? item.showMore : '';
    }
}
