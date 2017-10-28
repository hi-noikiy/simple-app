import {
  createStore,
  applyMiddleware,
} from 'redux';

import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger,
)(createStore)


export default createStoreWithMiddleware(rootReducer);
