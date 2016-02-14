
import {COMPLETE_TODO} from 'actions/completeTodo';

import completeTodo from './completeTodo';

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

const todos = (todos, action)=> {
  if (todos === undefined) {
    return TODOS;
  }
  switch (action.type) {
    case COMPLETE_TODO:
      return todos.map(t => completeTodo(t, action));
    default:
      return todos;
  }
};

export default todos;
