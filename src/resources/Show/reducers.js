import {
  FETCH_SHOW_PENDING,
  FETCH_SHOW_SUCCESS,
  FETCH_SHOW_FAILURE
} from './constants';

export const initialState = {
  show: null,
  loading: false,
  error: null
};

export default function showReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SHOW_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_SHOW_SUCCESS:
      return {
        ...state,
        loading: false,
        show: action.show
      };

    case FETCH_SHOW_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        show: null
      };

    default:
      return state;
  }
}
