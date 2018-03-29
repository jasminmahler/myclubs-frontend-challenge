import { BOOK_ACTIVITY } from '../actions';

export default function booking(state = false, action) {
  switch (action.type) {
    case BOOK_ACTIVITY:
      return action.isBooked;
  default:
    return state;
  }
}