import { SET_ACTIVITY } from '../actions';
import { convertActivity } from '../backend';

export default function activity(state = null, action) {
  switch (action.type) {
    case SET_ACTIVITY:
      return convertActivity(action.activity);
  default:
    return state;
  }
}