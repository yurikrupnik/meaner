import {createStore} from 'redux';
import Reducer from '../reducers/index';
import composed from './composed';

let store = createStore(Reducer, {}, composed);


export default store;

