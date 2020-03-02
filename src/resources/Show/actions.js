import {
  FETCH_SHOW_PENDING,
  FETCH_SHOW_SUCCESS,
  FETCH_SHOW_FAILURE
} from './constants';
import { fetchShow } from 'api';

export const fetchShowPending = () => ({
  type: FETCH_SHOW_PENDING
});

export const fetchShowSuccess = show => ({
  type: FETCH_SHOW_SUCCESS,
  show
});

export const fetchShowError = error => ({
  type: FETCH_SHOW_FAILURE,
  error
});

export const fetchShowAsync = () => async dispatch => {
  try {
    dispatch(fetchShowPending());

    const response = await fetchShow();

    dispatch(fetchShowSuccess(response.data));
  } catch (error) {
    dispatch(fetchShowError(error));
  }
};
