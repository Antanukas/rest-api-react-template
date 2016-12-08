// DO NOT REMOVE - not used here, but automatically called on load
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import RouteOne from 'route-one';
import RouteTwo from 'route-two';

const MenuPage = props => <div>{props.children}</div>;

MenuPage.propTypes = {
  children: React.PropTypes.node.isRequired,
};

render((
  <Router history={browserHistory}>
    <Route path="/" component={MenuPage}>
      <IndexRoute component={RouteOne} />
      <Route path="/route-one" component={RouteOne} />
      <Route path="/route-two" component={RouteTwo} />
    </Route>
  </Router>
), document.getElementById('app'));
