
import { routeActions } from 'react-router-redux';

export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const loginAttempt = (email, password)=> {
  return {
    type: LOGIN_ATTEMPT,
    payload: {
      email,
      password,
      status: '',
      token: null,
      isFetching: true
    }
  };
};

const loginFailure = (email)=> {
  return {
    type: LOGIN_FAILURE,
    payload: {
      email,
      password: '',
      status: 'failed',
      token: null,
      isFetching: false
    }
  };
};

const loginSuccess = (email)=> {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      email,
      password: '',
      status: 'success',
      token: 1,
      isFetching: false
    }
  };
};

export const loginFetch = (email, password) => {
  return (dispatch)=> {
    dispatch(loginAttempt(email, password));
    const loginPromise = new Promise((resolve, reject)=> {
      setTimeout(()=> {
        if (email == 'test@mail.com' && password == '1234') {
          resolve(email);
        } else {
          reject(email);
        }
      }, 2000);
    });
    loginPromise.then((email)=> {
      dispatch(loginSuccess(email));
      dispatch(routeActions.push({pathname: '/todos'}));
    }).catch((email)=> {
      dispatch(loginFailure(email));
    });
  };
};

export default loginFetch;
