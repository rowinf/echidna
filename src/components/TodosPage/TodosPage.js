
import 'styles/Page.scss';
import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/lib/card';
import TodoList from './TodoList';
import TodoProgress from './TodoProgress';
import store from 'stores';

const todosStyle = {
  maxWidth: 600,
  margin: '0 auto'
};

const TodosPageComponent = React.createClass({
  getInitialState() {
    return {todos: store.getState().todos};
  },
  componentDidMount() {
    this.unsubscribe = store.subscribe(this.updateTodos);
  },
  componentWillUnmount() {
    this.unsubscribe();
  },
  updateTodos() {
    let todos = store.getState().todos;
    this.setState({todos: todos});
  },
  render() {
    return (
      <Card style={todosStyle}>
        <CardTitle title="Todos" titleStyle={{textAlign: 'center'}}/>
        <CardText>
          <TodoList todos={this.state.todos} />
          <p style={{textAlign: 'center'}}><TodoProgress todos={this.state.todos} /></p>
        </CardText>
      </Card>
    );
  }
});

export default TodosPageComponent;
