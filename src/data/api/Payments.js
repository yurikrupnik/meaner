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

// const ss = new Payments();
// ss.getCount().then((data) => {
//     console.log('data', data);
// });
//
// ss.getPayments().then(function (res) {
//     console.log('res', res);
//     return ss.getFirst(res);
// });
export default new Payments();
