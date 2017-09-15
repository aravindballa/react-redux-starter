import React from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, browserHitory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Main from './containers/Main';
import Home from './containers/Home';

const router = (
  <Provider store={store}> 
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}></IndexRoute>
        {/* Add routes for extra things
        <Route path="/projects/" component={Projects}></Route>
         */}
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));