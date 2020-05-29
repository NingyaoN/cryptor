import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './src/app';
import Join from './src/components/join';

const routes = (
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/join" component={Join} />
  </Router>
);
Meteor.startup(() => {
  render(routes, document.getElementById('render-target'));
});
