export const getStatus = state => state.status;

export const getIsFetching = state => {
  const status = getStatus(state);
  return status.isFetching;
}

// return an error or - if no error exists - undefined
export const getError = state => {
  const status = getStatus(state);
  if (status && status.error) return status.error.message;
}