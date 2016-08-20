/**
 * Created by yurikrupnik on 20/08/2016.
 */
import request from 'superagent';


export const REQUEST_PAYMENTS = 'REQUEST_PAYMENTS';
export const RECEIVE_PAYMENTS = 'RECEIVE_PAYMENTS';


/*
 * action creators
 */
const ask = () => {
    return {
        type: REQUEST_PAYMENTS
    }
};

const got = (response) => {
    return {
        type: RECEIVE_PAYMENTS,
        items: response
        // isFetching: false
    }
};


export const fetchPayments = () => {
    return dispatch => {
        dispatch(ask());
        // return request(`http://www.reddit.com/r/${subreddit}.json`)
        return request(`/api/payments`)
            // .then(response => response.body)
            .then(response => dispatch(got(response.body)))
    }
};
