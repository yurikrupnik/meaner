import request from 'superagent';

/*
 * action types
 */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


/*
 * action creators
 */
export const plus = () => {
    return {
        type: INCREMENT
    }
};

export const minus = () => {
    return {
        type: DECREMENT
    }
};

export const loadPayments = () => {
    return dispatch => request.get('/api/payments')
        // .end(function(err, res){
        //     console.log('err', err);
        //
        //     console.log('res', res);
        //
        //     // Do something
        // })
        // .then(res => res.json())
        .then(response => {
            return response.body;
        })
        .then(
            response => {
                console.log('data', response);

                dispatch({ type: INCREMENT })
            },
            err => dispatch({ type: 'LOAD_DATA_FAILURE', err })
        );
};
