import {ADD_COUNTER, REMOVE_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER} from '../actions/counters';

// function increment(state) {
//     return state + 1;
// }
//
// function decrement(state) {
//     return state - 1;
// }
//
//
export default (state = [12, 11, 122], action) => {
    const {type, index} = action;

    switch (type) {
        case ADD_COUNTER:
            return [...state, 0];
        case REMOVE_COUNTER:
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];

        case INCREMENT_COUNTER:
            return [
                ...state.slice(0, index),
                state[index] + 1,
                ...state.slice(index + 1)
            ];

        case DECREMENT_COUNTER:
            return [
                ...state.slice(0, index),
                state[index] - 1,
                ...state.slice(index + 1)
            ];
        default:
            return state;
    }
};


