import { login } from '../actions/userActions'
import {
  LOGIN,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  LOGOUT_SUCCEEDED,
  GET_CURRENT_USER_SUCCEEDED,
  GET_CURRENT_USER_FAILED,
} from '../actions';

const initialState = {
  id: null,
  username: null,
  isLoading: true,
  error: null,
  admin: null,
};

export default function userReducers(state = initialState, action) {

  if (action.type === LOGIN) {
    login({
      username: action.username,
      password: action.password
    });
    return Object.assign({}, state, { isLoading: true });
  }

  if (action.type === LOGIN_SUCCEEDED ||
      action.type === GET_CURRENT_USER_SUCCEEDED) {
    return  Object.assign({}, state, action.user, {
      isLoading: false,
      error: null,
    });
  }

  if (action.type === LOGIN_FAILED) {
    return Object.assign({}, state, { error: action.error });
  }

  if (action.type === LOGOUT_SUCCEEDED ||
      action.type === GET_CURRENT_USER_FAILED) {
    return Object.assign({}, state, initialState, { isLoading: false });
  }

  return state;
}
