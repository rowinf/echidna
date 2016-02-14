
export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';

const loginAttempt = (email, password)=> {
  return {
    type: LOGIN_ATTEMPT,
    email,
    password
  };
};

export default loginAttempt;
