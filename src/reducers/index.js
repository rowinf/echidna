
import {combineReducers} from 'redux';
import todos from './todos';
import auth from './auth';
import { routeReducer } from 'react-router-redux';

const reducers = combineReducers({
  todos,
  auth,
  routing: routeReducer
});

export default reducers;
