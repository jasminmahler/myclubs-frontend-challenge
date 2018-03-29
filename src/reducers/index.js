import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import booking from './booking';

const rootReducer = combineReducers({
  isBooked: booking,
  routing: routerReducer
});

export default rootReducer;