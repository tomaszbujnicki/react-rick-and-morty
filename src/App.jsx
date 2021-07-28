import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Header from './components/Header';
import CharacterPage from './pages/CharacterPage';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/character/:id" component={CharacterPage} />
          <Route exact path="/location/:id" component={LocationPage} />

          <Redirect from="/" to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
