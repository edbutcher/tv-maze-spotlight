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
import Episodes from 'resources/Episodes';
import Episode from 'resources/Episode';

import styles from './styles.module.scss';

function AppRouter() {
  return (
    <Router>
      <main className={styles.container}>
        <Header />
        <Switch>
          <Redirect exact from='/' to='/show' />
          <Route path='/show' component={Show} />
          <Route exact path='/episodes' component={Episodes} />
          <Route path='/episodes/:episodeId' component={Episode} />
          <Route component={NoMatch} />
        </Switch>
      </main>
    </Router>
  );
}

export default AppRouter;
