import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'store';

function customRender(ui, { store = configureStore(), ...options}) {
  function AllTheProviders(props) {
    return <Provider store={store} {...props}/>;
  }
  return render(ui, { wrapper: AllTheProviders, ...options });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
