
const completeTodo = (todo, action)=> {
  if(todo.id != action.id) {
    return todo;
  }
  return Object.assign({}, todo, {isCompleted: true});
};

export default completeTodo;
