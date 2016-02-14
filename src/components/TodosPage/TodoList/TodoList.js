
import React from 'react';
import Todo from './Todo';

const TodoListComponent = React.createClass({
  propTypes: {
    todos: React.PropTypes.array
  },
  render() {
    return (
      <div>
        {this.props.todos.map(todo => <Todo {...todo} key={todo.id} />)}
      </div>
    );
  }
});

export default TodoListComponent;
