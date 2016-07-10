"use strict";

import todos from './todos';
import counter from './counter';
import counters from './counters';
import {combineReducers} from 'redux';

const reducers = {
    todos,
    counters,
    counter
};

export default combineReducers(reducers);

