
import {COMPLETE_TODO} from 'actions/completeTodo';

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

const completeSingleTodo = (todos, action)=> {
  let index = todos.findIndex(t => t.id == action.id);
  return [
    ...todos.slice(0, index),
    Object.assign({}, todos[index], {isCompleted: true}),
    ...todos.slice(index + 1)
  ];
};

const todos = (todos, action)=> {
  if (todos === undefined) {
    return TODOS;
  }
  switch (action.type) {
    case COMPLETE_TODO:
      return completeSingleTodo(todos, action);
    default:
      return todos;
  }
};

export default todos;
