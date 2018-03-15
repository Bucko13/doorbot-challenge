import {
  login as apiLogin,
  logout as apiLogout,
  getCurrentUser as apiGetCurrentUser
} from '../../services/api/userApi';

import {
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  LOGOUT_SUCCEEDED,
  LOGOUT_FAILED,
  GET_CURRENT_USER_SUCCEEDED,
  GET_CURRENT_USER_FAILED,
} from '.';

export function login({ username, password}) {
  return (dispatch) => {
    apiLogin({username, password })
      .then((data) => dispatch(loginSucceeded(data)))
      .catch((data) => dispatch(loginFailed(data)));
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

export function getCurrentUser() {
  return (dispatch) => {
    apiGetCurrentUser()
      .then((user) => {
        dispatch(getCurrentUserSucceeded(user))
      })
      .catch((data) => {
        dispatch(getCurrentUserFailed(data))
      });
  }
}

export function getCurrentUserSucceeded(user) {
  return {
    type: GET_CURRENT_USER_SUCCEEDED,
    user,
  }
}

export function getCurrentUserFailed() {
  return {
    type: GET_CURRENT_USER_FAILED
  }
}

export function logout() {
  return (dispatch) => {
    apiLogout()
      .then((data) => dispatch(logoutSucceeded()))
      .catch((data) => dispatch(logoutFailed()));
  }
}

function logoutSucceeded() {
  return {
    type: LOGOUT_SUCCEEDED
  };
}

function logoutFailed() {
  return {
    type: LOGOUT_FAILED
  };
}
