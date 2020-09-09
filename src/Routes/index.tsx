import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from './routesList';
import MainPage from 'pages/MainPage';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      {routes.map((route, index) => <Route key={index} exact {...route} />)}
      <Route key={'default'} component={MainPage} />
    </Switch>
  </Router>
)

export default Routes