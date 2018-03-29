export const BOOK_ACTIVITY = 'BOOK_ACTIVITY';

export function bookActivity() {
  return {
    type: BOOK_ACTIVITY,
    isBooked: true
  };
}