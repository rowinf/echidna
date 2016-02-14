
import 'core-js/fn/object/assign';
import 'core-js/fn/promise';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import TodosPage from './components/TodosPage';
import store from './stores';

function requireAuth(nextState, replace) {
  if (!store.getState().auth.token) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

// Render the main component into the dom
ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/todos" component={TodosPage} onEnter={requireAuth} />
      </Route>
    </Router>
  ), document.getElementById('app'));
