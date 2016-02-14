
import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Checkbox from 'material-ui/lib/checkbox';
import store from 'stores';
import completeTodo from 'actions/completeTodo';

const TodoComponent = React.createClass({
  propTypes: {
    isCompleted: React.PropTypes.bool,
    text: React.PropTypes.string,
    id: React.PropTypes.number
  },
  handleClick() {
    store.dispatch(completeTodo(this.props.id));
  },
  render() {
    const isCompleted = this.props.isCompleted;
    return (
      <ListItem
        leftCheckbox={<Checkbox checked={isCompleted} onClick={this.handleClick} />}
        primaryText={
          <div style={{textDecoration: isCompleted ? 'line-through' : 'none'}}>
            {this.props.text}
          </div>
        }  />
    );
  }
});

export default TodoComponent;
