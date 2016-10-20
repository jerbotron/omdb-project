import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';
import routes from './routes';

export default (
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>
);
