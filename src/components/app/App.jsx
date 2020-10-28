import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterPage from '../../pages/CharacterPage'
import CharacterDetailPage from '../../pages/CharacterDetailPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={CharacterPage} />
        <Route exact path='/characters/:id' component={CharacterDetailPage} />
      </Switch>
    </Router>
  );
}
