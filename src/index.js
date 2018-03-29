import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';
import routes from './routes';
import history from './history';

const routerHistory = syncHistoryWithStore(history, store);

const router = <Router history={routerHistory}>
  { routes }
</Router>;

const mount = document.getElementById('root');
const provider = <Provider store={store}>
  { router }
</Provider>;

ReactDOM.render(provider, mount);
registerServiceWorker();