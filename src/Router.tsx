import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainPage from 'pages/MainPage';
import CreateList from 'pages/CreateList';

const Routes = () => (
  <Router>
    <Route path="/" exact component={MainPage} />
    <Route path="/create" exact component={CreateList} />
  </Router>
)

export default Routes