import { fetchShow } from 'api';
import createActionCreators from 'utils/createActionCreators';
import { actionTypes } from './constants';

export const actions = createActionCreators(actionTypes);

export function fetchShowAsync() {
  return async dispatch => {
    try {
      dispatch(actions.fetchPending());

      const response = await fetchShow();

      dispatch(actions.fetchSuccess(response.data));
    } catch (error) {
      dispatch(actions.fetchError(error));
    }
  };
}

export default {
  ...actions,
  fetchShowAsync
};
