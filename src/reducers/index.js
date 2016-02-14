
import {LOGIN_ATTEMPT} from 'actions/loginAttempt';
import {COMPLETE_TODO} from 'actions/completeTodo';

import completeTodo from './completeTodo';

import log from 'loglevel';

const appReducer = (state, action)=> {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      log.info(`attempted login as ${action.email}/${action.password}`);
      return state;
    case COMPLETE_TODO:
      log.info(`completed todo id: ${action.id}`);
      let todos = state.todos.map(t => completeTodo(t, action));
      return Object.assign({}, state, {todos: todos});
    default:
      return state;
  }
};

export default appReducer;
