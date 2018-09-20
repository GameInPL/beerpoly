import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Board from './Board';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/board/" component={Board} />
    </div>
  </Router>
);
