import { SET_BANDS } from "./actions";

export const bands = (state, { type, bands }) => {
  switch (type) {
    case SET_BANDS:
      return {
        ...state,
        bands
      }
    default:
      return state;
  }
}