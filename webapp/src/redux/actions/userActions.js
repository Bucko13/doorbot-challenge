import userApi from '../../services/api/userApi';

import {
  LOGIN,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  LOGOUT,
  LOGOUT_SUCCEEDED,
  LOGOUT_FAILED
} from '.';

export function login({ username, password}) {
  return (dispatch) => {
    userApi.login({username, password })
      .then((data) => dispatch(loginSucceeded(data)))
      .catch((data) => {
        dispatch(loginFailed(data))
      });
  }
}

export function loginSucceeded(user) {
  return {
    type: LOGIN_SUCCEEDED,
    user
  }
}

export function loginFailed({ error }) {
  return {
    type: LOGIN_FAILED,
    error,
  }
}
