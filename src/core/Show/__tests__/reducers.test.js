import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actions from '../actions';
import reducer from '../reducers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('api', () => ({
  fetchShow: jest.fn(() =>
    Promise.resolve({ data: { testField: 'test data' } })
  )
}));

describe('fetchShowAsync action', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('creates FETCH_SHOW_SUCCESS when fetching show has been done', () => {
    const expectedActions = [
      actions.fetchPending(),
      actions.fetchSuccess({ testField: 'test data' })
    ];
    const store = mockStore(reducer(undefined, {}));

    return store.dispatch(actions.fetchShowAsync()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
