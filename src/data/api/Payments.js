import ApiHelper from '../ApiHelper';
import {head} from 'lodash';


class Payments extends ApiHelper {
    constructor() {
        super();
        // this.request = request;
        this.url = '/api/payments';
    }

    getPayments() {
        return this.request.get(this.url)
            .then(this.getFirst);
    }

    getCount() {
        return this.request.get(`${this.url}/count`);
    }
}

export default new Payments();
