/**
 * Created by yurikrupnik on 20/08/2016.
 */
import request from 'superagent';

import Payment from '../data/api/Payments';

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
    }
};

export const fetchPayments = () => {
    return dispatch => {
        dispatch(ask());
        return Payment.getPayments()
            .then(response => dispatch(got(response)))
    }
};
