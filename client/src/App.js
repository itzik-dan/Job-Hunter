import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {connect} from 'react-redux'
import { fetchUser } from './actions/auth'
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Publishers from './components/publishers/Publishers';

import "./App.css";

const Jobs = () => <p>Jobs Page</p>

const App = ({fetchUser}) => {
  useEffect(() => {
    fetchUser()
  }, [fetchUser]);

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Publishers" component={Publishers} />
          <Route exact path="/jobs" component={Jobs} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default connect(null, { fetchUser })(App);
