
import 'normalize.css';
import 'styles/App.scss';

import React from 'react';
import LoginForm from './LoginForm';
import log from 'loglevel';

log.setLevel('info');

let AppComponent = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },
  render() {
    return (
      <div className="index">
        {
          this.props.children ||
          <LoginForm />
        }
      </div>
    );
  }
});

AppComponent.defaultProps = {
};

export default AppComponent;
