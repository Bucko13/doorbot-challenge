import { combineReducers } from 'redux';
import user from './userReducers';

const initialState = {
  list: [
    { id: 1, name: 'Front Door'},
    { id: 2, name: 'Back Door'}
  ]
}

const doors = (state = initialState, action) => {
  return state;
};

const rootReducer = combineReducers({
  user,
  doors,
});

export default rootReducer;
