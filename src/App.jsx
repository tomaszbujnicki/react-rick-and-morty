import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" />

          <Route exact path="/character/:id" />

          <Redirect from="/" to="/" />
        </Switch>
      </div>
    </Router>
  );
}
