import React from 'react';
import { Route} from 'react-router';

import App from './components/App';

const routes = <Route>
  <Route path="/" component={App} />
</Route>;

export default routes;