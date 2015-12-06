import { AsyncStorage } from 'react-native';
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from './reducers';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
  predicate: (getState, action) => true
});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);

let store = autoRehydrate()(createStoreWithMiddleware)(reducers);

persistStore(store, {
  storage: AsyncStorage,
  whitelist: ['colorgyAPI']
});

if (window) window.store = store;

export default store;
