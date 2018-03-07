import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

export default function configureStore() {
  return createStore(
    rootReducer,
    compose (
      applyMiddleware(thunk),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    )
  );
};

