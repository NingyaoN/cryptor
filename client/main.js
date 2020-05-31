import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './src/app';
import Join from './src/components/join';
import Logo from './src/components/logo';

const routes = (
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/join" component={Join} />
    <Route exact path="/team/logo" component={Logo} />
  </Router>
);
Meteor.startup(() => {
  render(routes, document.getElementById('render-target'));
});
