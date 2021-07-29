import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import { EpisodesPage, LocationsPage, CharactersPage } from './pages/ItemsPage';
import { CharacterPage, EpisodePage, LocationPage } from './pages/ItemPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/characters" component={CharactersPage} />
          <Route exact path="/locations" component={LocationsPage} />
          <Route exact path="/episodes" component={EpisodesPage} />

          <Route exact path="/character/:id" component={CharacterPage} />
          <Route exact path="/location/:id" component={LocationPage} />
          <Route exact path="/episode/:id" component={EpisodePage} />

          <Redirect from="/" to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
