
import {LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILURE} from 'actions/loginFetch';

const initialState = {
  isFetching: false,
  status: null,
  token: null
};

const auth = (auth, action)=> {
  if (auth === undefined) {
    return initialState;
  }
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return action.payload;
    case LOGIN_SUCCESS:
      return action.payload;
    case LOGIN_FAILURE:
      return action.payload;
    default:
      return auth;
  }
};

export default auth;
