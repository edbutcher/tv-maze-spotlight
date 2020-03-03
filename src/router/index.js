import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Header from 'core/Header';
import NoMatch from 'core/NoMatch';
import Show from 'core/Show';
import Episodes from 'core/Episodes';
import Episode from 'core/Episode';

function AppRouter() {
  return (
    <Router>
        <Header />
        <Switch>
          <Redirect exact from='/' to='/show' />
          <Route path='/show' component={Show} />
          <Route exact path='/episodes' component={Episodes} />
          <Route path='/episodes/:episodeId' component={Episode} />
          <Route component={NoMatch} />
        </Switch>
    </Router>
  );
}

export default AppRouter;
