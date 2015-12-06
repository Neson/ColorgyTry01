import { compose, createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import createLogger from 'redux-logger';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
  predicate: (getState, action) => true
});

import thunkMiddleware from 'redux-thunk';

const createPersistentStore = compose(
  createStore
);

const createPersistentStoreWithMiddleware = applyMiddleware(
  loggerMiddleware,
  thunkMiddleware
)(createPersistentStore);

let store = createPersistentStoreWithMiddleware(reducers);

if (window) window.store = store;

export default store;
