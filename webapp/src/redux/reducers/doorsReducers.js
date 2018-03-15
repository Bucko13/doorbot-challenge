import {
  FETCH_DOORS,
  FETCH_DOORS_SUCCEEDED,
  FETCH_DOORS_FAILED,
  LOGOUT_SUCCEEDED,
  OPEN_DOOR_SUCCEEDED,
  CLOSE_DOOR,
} from '../actions';

const initialState = {
  list: [],
  isLoading: true,
  error: null,
};

export default function doorsReducers(state = initialState, action) {
  if (action.type === FETCH_DOORS) {
    return Object.assign({}, state, { isLoading: true });
  }

  if (action.type === FETCH_DOORS_SUCCEEDED) {
    return Object.assign({}, state, { list: action.doors, isLoading: false });
  }

  if (action.type === FETCH_DOORS_FAILED) {
    return Object.assign({}, state, { isLoading: false, error: action.error });
  }

  if (action.type === LOGOUT_SUCCEEDED) {
    return Object.assign({}, state, { list: [], isLoading: false });
  }

  if (action.type === OPEN_DOOR_SUCCEEDED) {
    return Object.assign({}, state, {
      list: state.list.map((door) => {
        if (door.id !== action.id) { return door; }

        return { ...door, opened: true }
      })
    });
  }

  if (action.type === CLOSE_DOOR) {
    return Object.assign({}, state, {
      list: state.list.map((door) => {
        if (door.id !== action.id) { return door; }

        return { ...door, opened: false }
      })
    });
  }

  return state;
}
