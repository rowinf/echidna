import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import TodosPage from './components/TodosPage';

// Render the main component into the dom
ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/todos" component={TodosPage} />
      </Route>
    </Router>
  ), document.getElementById('app'));
