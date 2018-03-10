import { login } from '../actions/userActions'
import {
  LOGIN,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  LOGOUT,
  LOGOUT_SUCCEEDED,
  LOGOUT_FAILED } from '../actions';

const initialState = {
  id: null,
  username: '',
  isLoading: false,
  error: null,
  admin: false,
};

export default function userReducers(state = initialState, action) {

  if (action.type === LOGIN) {
    const { username, password } = action;
    login({ username, password });
    return Object.assign({}, state, { isLoading: true });
  }

  if (action.type === LOGIN_SUCCEEDED) {
    const { user: { username, requires_reset, last_login, id } } = action;
    return Object.assign({}, state, {
      username,
      requires_reset,
      last_login,
      id,
      isLoading: false,
      error: null,
    });
  }

  if (action.type === LOGIN_FAILED) {
    const { error } = action;
    return Object.assign({}, state, { error });
  }

  return state;
}
