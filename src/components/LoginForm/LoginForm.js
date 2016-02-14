
import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import {Card, CardTitle, CardText, CardActions} from 'material-ui/lib/card';
import {Colors} from 'material-ui/lib/styles';
import CircularProgress from 'material-ui/lib/circular-progress';
import store from 'stores';
import loginFetch from 'actions/loginFetch';


const loginStyles = {
  margin: '10px auto',
  maxWidth: 650
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
    return {email: '', password: '', isSumbitted: false, invalidEmailText: '', auth: {}};
  },
  componentDidMount() {
    this.unsubscribe = store.subscribe(this.updateAuth);
  },
  componentWillUnmount() {
    this.unsubscribe();
  },
  updateAuth() {
    this.setState({auth: store.getState().auth});
  },
  handleSubmit(event) {
    event.preventDefault();
    this.setState({isSumbitted: true});
    if (this.isEmailValid()) {
      store.dispatch(loginFetch(this.state.email, this.state.password));
    }
    this.setErrorText();
  },
  isEmailValid() {
    if (!this.state.isSumbitted) return true;
    return this.state.email.match(/^\S+@\S+$/);
  },
  setErrorText() {
    let email = !this.isEmailValid() ? 'please enter a valid email address' : '';
    this.setState({invalidEmailText: email});
  },
  emailValueLink() {
    return ;
  },
  render() {
    return (
      <Card style={loginStyles}>
        <CardTitle title="Todo App 2000" style={headerStyles} titleColor={Colors.grey50} />
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="flex-content">
            <CardText>
              <TextField type="email" hintText="email" ref="email"
                valueLink={this.linkState('email')}
                errorText={this.state.invalidEmailText || (this.state.auth.status == 'failed' && ' ')} />
              <br/>
              <TextField type="password" hintText="password" ref="password"
                valueLink={this.linkState('password')}
                errorText={this.state.auth.status == 'failed' && 'Invalid email or password'} />
              <div style={{height: 50}}>
                {this.state.auth.isFetching && <CircularProgress size={.5} />}
              </div>
            </CardText>
            <CardText>
              <p><em>A todo app for this century</em></p>
              <p>
                Test Account: <br/>
                email: test@mail.com <br/>
                pass: 1234
              </p>
            </CardText>
          </div>
          <CardActions>
            <RaisedButton type="submit" label="Login" labelPosition="before" primary />
          </CardActions>
        </form>
      </Card>
    );
  }
});

export default LoginFormComponent;
