import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Header from 'resources/Header';
import NoMatch from 'resources/NoMatch';
import Show from 'resources/Show';
import Episode from 'resources/Episode';

function AppRouter() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Redirect exact from='/' to='/show' />
          <Route path='/show' exact component={Show} />
          <Route path='/episodes/:episodeId' component={Episode} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
