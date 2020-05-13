import {
  START_FETCHING,
  END_FETCHING,
  FAILED_FETCHING
} from "./actions";

export const status = (state, { type, error }) => {
  switch (type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true
      }
    case END_FETCHING:
      return {
        ...state,
        isFetching: false
      }
    case FAILED_FETCHING:
      return {
        state,
        error
      };
    default:
      return state;
  }
}