import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Profile, Home } from './views';
import { Navbar } from './components';


export const App: React.SFC = () => (
  <div>
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/profile/:username" component={Profile} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  </div>
);
