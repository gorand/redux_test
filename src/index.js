import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import List from './containers/List';
import Info from './containers/Info';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import configureStore from './store/configureStore';
import './index.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Info} />
        <Route path="index" component={Info} />
        <Route path="list" component={List} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
