import { combineReducers } from 'redux';
import user from './userReducers';
import doors from './doorsReducers';

const rootReducer = combineReducers({
  user,
  doors,
});

export default rootReducer;
