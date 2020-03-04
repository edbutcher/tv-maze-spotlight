import createActionTypes from '../createActionTypes';

describe('createActionTypes', () => {
  const ACTION_BASE_NAME = 'ACTION_BASE_NAME';
  let actions;

  beforeEach(() => {
    actions = createActionTypes(ACTION_BASE_NAME);
  });

  it('should create FETCH_PENDING constant', () => {
    expect(actions.FETCH_PENDING).toBeDefined();
    expect(actions.FETCH_PENDING.includes(ACTION_BASE_NAME)).toBe(true);
  });

  it('should create FETCH_SUCCESS constant', () => {
    expect(actions.FETCH_SUCCESS).toBeDefined();
    expect(actions.FETCH_SUCCESS.includes(ACTION_BASE_NAME)).toBe(true);
  });

  it('should create FETCH_FAILURE constant', () => {
    expect(actions.FETCH_FAILURE).toBeDefined();
    expect(actions.FETCH_FAILURE.includes(ACTION_BASE_NAME)).toBe(true);
  });
});
