import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import StickyNavBar from './components/StickyNavBar';
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
      <StickyNavBar />
      <Header />
      <main className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route
            exact
            path="/search/:type/:by/:text/:page?"
            component={SearchPage}
          />

          <Route exact path="/characters/:page?" component={CharactersPage} />
          <Route exact path="/locations/:page?" component={LocationsPage} />
          <Route exact path="/episodes/:page?" component={EpisodesPage} />

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
