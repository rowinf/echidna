
import { createStore } from 'redux';
import appReducer from '../reducers';

const TODOS = [
  {
    id: 0,
    text: 'A sample todo',
    isCompleted: false
  },
  {
    id: 1,
    text: 'Another sample',
    isCompleted: false
  },
  {
    id: 2,
    text: 'Tis one is completed',
    isCompleted: false
  }
];

const initialState = {
  auth: false,
  todos: TODOS
};

//  redux dev tools chrome extension middleware
let store = createStore(appReducer, initialState,
  window.devToolsExtension ? window.devToolsExtension() : undefined);

export default store;
