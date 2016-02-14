
import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import {Card, CardTitle, CardText, CardActions} from 'material-ui/lib/card';
import {Colors} from 'material-ui/lib/styles';
import store from 'stores';
import loginAttempt from 'actions/loginAttempt';

const loginStyles = {
  maxWidth: 300,
  margin: '0 auto'
};

const headerStyles = {
  backgroundColor: Colors.blueA700
};

const LoginFormComponent = React.createClass({
  propTypes: {
    style: React.PropTypes.object
  },
  mixins: [LinkedStateMixin],
  getInitialState() {
    return {email: '', password: ''};
  },
  handleSubmit(event) {
    event.preventDefault();
    store.dispatch(loginAttempt(this.state.email, this.state.password));
  },
  render() {
    return (
      <Card style={loginStyles}>
        <CardTitle title="Login" style={headerStyles} titleColor={Colors.grey50} />
        <form onSubmit={this.handleSubmit} noValidate>
          <CardText>
            <TextField type="email" hintText="email" ref="email"
              valueLink={this.linkState('email')}/>
            <br/>
            <TextField type="password" hintText="password" ref="password"
              valueLink={this.linkState('password')} />
            <br/>
          </CardText>
          <CardActions>
            <RaisedButton type="submit" label="Login" primary fullWidth />
          </CardActions>
        </form>
      </Card>
    );
  }
});

export default LoginFormComponent;
