import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import reducer from '../reducers';
import history from '../history';

export default function configureStore(initialState = {}) {
  const reduxRouterMiddleware = routerMiddleware(history);
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk, reduxRouterMiddleware)
  );

  return store;
}