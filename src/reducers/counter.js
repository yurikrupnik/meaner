import {INCREMENT, DECREMENT} from '../actions/counter';

import {increment, decrement} from './util/util';


export default (state = 2, action) => {
    switch (action.type) {
        case INCREMENT:
            return increment(state);
        case DECREMENT:
            return decrement(state);
        default:
            return state
    }
};


