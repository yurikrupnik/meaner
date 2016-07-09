import {INCREMENT, DECREMENT} from '../actions/counter';

function increment(state) {
    return state + 1;
}

function decrement(state) {
    return state - 1;
}


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


