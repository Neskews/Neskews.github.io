import {
  startFetching,
  endFetching,
  failedFetching
} from "../../reducers/reducers";

export const _fetchBands = (
  onSuccess,
  onFailure,
  onEnd
) => window.fetch("http://localhost:8000/bands")
  .then(response => response.json())
  .then(onSuccess)
  .catch(onFailure)
  .finally(onEnd);

export const fetchBands = apiProps => {
  const { dispatch } = apiProps;
  dispatch(startFetching());

  _fetchBands(
    console.log,
    error => dispatch(failedFetching(error)),
    () => dispatch(endFetching())
  );
}