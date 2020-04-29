import { ListGeneric } from '../../core/entities/generic/list-generic';
import { User } from '../../core/entities/user/user';

export class ListUsers extends ListGeneric {

    public users: User[];

    constructor(data?: any) {
        super(data);
        this.users = data && data.docs && data.docs.length > 0 ? data.docs.map(user => new User(user)) : [] ;
    }
}
