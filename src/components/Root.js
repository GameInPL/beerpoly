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
    <div className="container" id="container">
      <Route exact path="/" component={Home} />
      <Route path="/board/" component={Board} />
    </div>
  </Router>
);

/*
export default () => (
  <Router>
    <div className="container">
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>

  <div className="container" id="container">
    < msg="test" />
  </div>
);
*/
