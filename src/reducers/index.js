import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import activity from './activity';
import booking from './booking';

const rootReducer = combineReducers({
  activity,
  isBooked: booking,
  routing: routerReducer
});

export default rootReducer;