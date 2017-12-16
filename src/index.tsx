import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router';

import About from './containers/about/about';
import App from './containers/app/app';
import { configureStore } from './store';

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
