import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store';
import AppRouter from 'router';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
