import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Header from './components/Header';
import CharacterPage from './pages/CharacterPage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/characters" component={CharactersPage} />
          <Route exact path="/character/:id" component={CharacterPage} />
          <Route exact path="/location/:id" component={LocationPage} />

          <Redirect from="/" to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
