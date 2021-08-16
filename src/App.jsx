import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import {
  EpisodesPage,
  LocationsPage,
  CharactersPage,
} from './pages/ItemsPage/ItemsPage';

import CharacterPage from './pages/CharacterPage';
import EpisodePage from './pages/EpisodePage';
import LocationPage from './pages/LocationPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route
            strict
            exact
            path="/search/:type/:by/:text/:page?"
            component={SearchPage}
          />

          <Route
            strict
            exact
            path="/characters/:page?"
            component={CharactersPage}
          />
          <Route
            strict
            exact
            path="/locations/:page?"
            component={LocationsPage}
          />
          <Route
            strict
            exact
            path="/episodes/:page?"
            component={EpisodesPage}
          />

          <Route strict exact path="/character/:id" component={CharacterPage} />
          <Route strict exact path="/location/:id" component={LocationPage} />
          <Route strict exact path="/episode/:id" component={EpisodePage} />

          <Redirect from="/" to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
