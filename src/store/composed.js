import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import {applyMiddleware, compose} from 'redux';
import DevTools from '../components/DevTools/DevTools';

const logger = createLogger();

const composed = compose(
    applyMiddleware(thunk, promise, logger),
    DevTools.instrument()
);

export default composed;
