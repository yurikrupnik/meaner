import Request from 'superagent';
// var request = require('superagent');

export default class ApiHelper {
    constructor() {
        this.request = Request;
    }

    getFirst(response) {
        return head(response.body);
    }
}
