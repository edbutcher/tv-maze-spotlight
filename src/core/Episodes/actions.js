import { fetchShowEpisodes } from 'api';
import createActionCreators from 'utils/createActionCreators';
import { actionTypes } from './constants';

export const actions = createActionCreators(actionTypes);

export const fetchEpisodesAsync = () => async dispatch => {
  try {
    dispatch(actions.fetchPending());

    const response = await fetchShowEpisodes();

    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};
