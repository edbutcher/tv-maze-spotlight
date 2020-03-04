import createReducer, { initialState } from '../createReducer';

describe('createReducer', () => {
  const testActionTypes = {
    FETCH_PENDING: `FETCH_TEST_PENDING`,
    FETCH_SUCCESS: `FETCH_TEST_SUCCESS`,
    FETCH_FAILURE: `FETCH_TEST_FAILURE`
  };
  let reducer;

  beforeEach(() => {
    reducer = createReducer(testActionTypes);
  });

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toMatchObject(initialState);
  });

  it('should handle FETCH_PENDING', () => {
    expect(
      reducer(initialState, {
        type: testActionTypes.FETCH_PENDING
      })
    ).toMatchObject({ ...initialState, loading: true });
  });

  it('should handle FETCH_SUCCESS', () => {
    const data = { testField: 'test value' };
    expect(
      reducer(initialState, {
        type: testActionTypes.FETCH_SUCCESS,
        data
      })
    ).toMatchObject({ ...initialState, data });
  });

  it('should handle FETCH_FAILURE', () => {
    const error = { code: 404, message: 'Not found' };
    expect(
      reducer(initialState, {
        type: testActionTypes.FETCH_FAILURE,
        error
      })
    ).toMatchObject({ ...initialState, error });
  });
});
