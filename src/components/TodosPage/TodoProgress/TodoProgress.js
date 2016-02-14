
import React from 'react';

const TodoProgressComponent = React.createClass({
  propTypes: {
    todos: React.PropTypes.array
  },
  render() {
    const todos = this.props.todos;
    const completed = todos.filter(todo => todo.isCompleted == true);
    return (
      <span>{completed.length} / {todos.length} completed</span>
    );
  }
});

export default TodoProgressComponent;
