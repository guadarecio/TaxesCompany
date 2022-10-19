import {combineReducers, createStore} from 'redux';
import {reducerApp} from './reducer';

const reducers = combineReducers({
  reducerApp,
});

const store = createStore(reducers);

export default store;
