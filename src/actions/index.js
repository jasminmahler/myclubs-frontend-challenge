import { fetchJson } from '../backend';

export const SET_ACTIVITY = 'SET_ACTIVITY';
export const BOOK_ACTIVITY = 'BOOK_ACTIVITY';

export function loadActivity() {
  return (dispatch) => fetchJson('https://frontend-challenge-190ff.firebaseio.com/activities/coding-activity.json').then(activity => {
    dispatch({
      type:  SET_ACTIVITY,
      activity
    });
  });
}

export function bookActivity() {
  return {
    type: BOOK_ACTIVITY,
    isBooked: true
  };
}