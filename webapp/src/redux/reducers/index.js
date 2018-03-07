import { combineReducers } from 'redux';

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
  doors
});

export default rootReducer;
