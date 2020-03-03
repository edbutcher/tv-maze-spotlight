import { fetchEpisodeById } from 'api';
import createActionCreators from 'utils/createActionCreators';
import { actionTypes } from './constants';

export const actions = createActionCreators(actionTypes);

export const fetchEpisodeByIdAsync = (id) => async dispatch => {
  try {
    dispatch(actions.fetchPending());

    const response = await fetchEpisodeById(id);

    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};