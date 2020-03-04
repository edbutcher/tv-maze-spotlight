import createActionCreators from '../createActionCreators';

describe('createActionCreators', () => {
  const testActionTypes = {
    FETCH_PENDING: `FETCH_TEST_PENDING`,
    FETCH_SUCCESS: `FETCH_TEST_SUCCESS`,
    FETCH_FAILURE: `FETCH_TEST_FAILURE`
  };
  let actions;

  beforeEach(() => {
    actions = createActionCreators(testActionTypes);
  });

  it('should create correct action from fetchPending action creator', () => {
    expect(actions.fetchPending()).toMatchObject({
      type: testActionTypes.FETCH_PENDING
    });
  });

  it('should create correct action from fetchSuccess action creator', () => {
    const data = { test: 'test' };

    expect(actions.fetchSuccess(data)).toMatchObject({
      type: testActionTypes.FETCH_SUCCESS,
      data
    });
  });

  it('should create correct action from fetchError action creator', () => {
    const error = { code: 404, message: 'Not found' };

    expect(actions.fetchError(error)).toMatchObject({
      type: testActionTypes.FETCH_FAILURE,
      error
    });
  });
});
