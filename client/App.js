import React from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, browserHitory } from 'react-router';

import Main from './containers/Main';
import Home from './containers/Home';

const router = (
    <Router history={browserHitory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}></IndexRoute>
        {/* Add routes for extra things
        <Route path="/projects/" component={Projects}></Route>
         */}
      </Route>
    </Router>
)

render(router, document.getElementById('root'));