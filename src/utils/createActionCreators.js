function createActionCreators(actionTypes) {
  const fetchPending = () => ({
    type: actionTypes.FETCH_PENDING
  });

  const fetchSuccess = data => ({
    type: actionTypes.FETCH_SUCCESS,
    data
  });

  const fetchError = error => ({
    type: actionTypes.FETCH_FAILURE,
    error
  });

  return {
    fetchPending,
    fetchSuccess,
    fetchError
  };
}

export default createActionCreators;
