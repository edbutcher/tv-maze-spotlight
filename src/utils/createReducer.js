export const initialState = {
  data: null,
  loading: false,
  error: null
};

function createReducer(actionTypes) {
  return (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FETCH_PENDING:
        return {
          ...state,
          loading: true,
          error: null
        };

      case actionTypes.FETCH_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.data
        };

      case actionTypes.FETCH_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
          data: null
        };

      default:
        return state;
    }
  };
}

export default createReducer;
