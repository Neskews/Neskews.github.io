import {
  START_FETCHING,
  END_FETCHING,
  FAILED_FETCHING
} from './actions';

export const startFetching = () => ({
  type: START_FETCHING
});

export const endFetching = () => ({
  type: END_FETCHING
});

export const failedFetching = (error) => ({
  type: FAILED_FETCHING,
  error
});