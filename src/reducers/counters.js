import {ADD_COUNTER, REMOVE_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER} from '../actions/counters';

import {removeByIndex, incrementByIndex, decrementByIndex} from './util/util';
export default (state = [12, 11, 122], action) => {
    const {type, index} = action;

    switch (type) {
        case ADD_COUNTER:
            return [...state, 0];
        case REMOVE_COUNTER:
            return removeByIndex(state, index);

        case INCREMENT_COUNTER:
            return incrementByIndex(state, index);

        case DECREMENT_COUNTER:
            return decrementByIndex(state, index);
        default:
            return state;
    }
};


