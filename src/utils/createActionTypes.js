export default actionBaseName => ({
  FETCH_PENDING: `FETCH_${actionBaseName}_PENDING`,
  FETCH_SUCCESS: `FETCH_${actionBaseName}_SUCCESS`,
  FETCH_FAILURE: `FETCH_${actionBaseName}_FAILURE`
});
