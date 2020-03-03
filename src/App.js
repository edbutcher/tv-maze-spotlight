import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store';
import AppRouter from 'router';

import styles from './App.module.scss';

const store = configureStore();

function App() {
  return (
    <main className={styles.container}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </main>
  );
}

export default App;
