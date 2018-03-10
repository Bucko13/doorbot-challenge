import {
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  FETCH_DOORS,
  FETCH_DOORS_SUCCEEDED,
  FETCH_DOORS_FAILED,
  LOGOUT_SUCCEEDED,
  OPEN_DOOR_SUCCEEDED,
  OPEN_DOOR_FAILED,
  CLOSE_DOOR,
} from '.';

import {
  fetchDoors as apiFetchDoors,
  openDoor as apiOpenDoor,
} from '../../services/api/doorsApi';

export function fetchDoors() {
  return (dispatch) => {
    apiFetchDoors()
      .then((doors) => dispatch(fetchDoorsSucceeded(doors)))
      .catch((error) => dispatch(fetchDoorsFailed(error)));
  };
}

export function fetchDoorsSucceeded(doors) {
  return {
    type: FETCH_DOORS_SUCCEEDED,
    doors
  }
}

export function fetchDoorsFailed(error) {
  return {
    type: FETCH_DOORS_FAILED,
    error
  }
}

export function openDoor({ id }) {
  return (dispatch) => {
    apiOpenDoor({ id })
      .then(() => {
        dispatch(openDoorSucceeded({ id }))
        setTimeout(() => {
          dispatch(closeDoor({ id }))
        }, 2000);
      })
      .catch((error) => dispatch(openDoorFailed()));
  }
}

export function openDoorSucceeded({ id }) {
  return {
    type: OPEN_DOOR_SUCCEEDED,
    id
  }
}

export function closeDoor({ id }) {
  return {
    type: CLOSE_DOOR,
    id
  }
}

export function openDoorFailed(error) {
  return {
    type: OPEN_DOOR_FAILED,
    error
  }
}
