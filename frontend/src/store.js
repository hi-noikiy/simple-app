import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers/index";
import sagas from "./sagas";
// import thunk from 'redux-thunk';
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(sagaMiddleware, logger)(
  createStore,
);

export default createStoreWithMiddleware(rootReducer);
sagaMiddleware.run(sagas);
