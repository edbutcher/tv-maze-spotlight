import React from 'react';
import { render } from 'utils/test-utils';
import configureStore from 'store';
import Show from '../index';
import { actions } from '../actions';
import mockShow from '../__mocks__/show';

describe('Show component', () => {
  it('should render loading', () => {
    const mockStore = configureStore();
    const { getByText } = render(<Show />, { store: mockStore });
    mockStore.dispatch(actions.fetchPending());

    expect(getByText('Loading...')).toBeDefined();
  });

  it('should render error', () => {
    const mockStore = configureStore();
    const { getByText } = render(<Show />, { store: mockStore });
    mockStore.dispatch(actions.fetchError({ code: 404, message: 'Not found' }));

    expect(getByText('Error!')).toBeDefined();
  });

  it('should render correct title', () => {
    const mockStore = configureStore();
    const { getByText } = render(<Show />, { store: mockStore });
    mockStore.dispatch(actions.fetchSuccess(mockShow));

    expect(getByText(mockShow.name, { selector: 'h1' })).toBeDefined();
  });

  it('should render correct image', () => {
    const mockStore = configureStore();
    const { getByAltText } = render(<Show />, { store: mockStore });
    mockStore.dispatch(actions.fetchSuccess(mockShow));

    expect(getByAltText(mockShow.name)).toBeDefined();
  });

  it('should render correct description', () => {
    const mockStore = configureStore();
    const { getByTestId } = render(<Show />, { store: mockStore });
    mockStore.dispatch(actions.fetchSuccess(mockShow));

    expect(getByTestId('show-description')).toBeDefined();
  });
});
