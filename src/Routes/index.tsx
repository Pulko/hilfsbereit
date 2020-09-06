import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from './routesList';
import MainPage from 'pages/MainPage';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      {routes.map(route => <Route exact {...route} />)}
      <Route component={MainPage} />
    </Switch>
  </Router>
)

export default Routes