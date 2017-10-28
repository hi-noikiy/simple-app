import {
  combineReducers,
} from 'redux';

import lendingReducer from './lending';

export default combineReducers({
  lending: lendingReducer,
})
