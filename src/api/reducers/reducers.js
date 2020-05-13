import { process } from './process/process';
import { login } from './login/login';
import { hire } from './hire/hire';
import { filter } from './filter/filter';
import {
  goToBands,
  goToLogin,
  goToSearch,
  goToBandArea,
  goToInfo
} from './process/actionCreators';
import { setLogin } from './login/actionCreators';
import { setHire } from './hire/actionCreators';
import { status } from "./status/status";
import {
  startFetching,
  endFetching,
  failedFetching
} from './status/actionCreators';

export const main = (state, action) => {
  console.log(action);
  console.log(state);
  let nextState = state;

  nextState = process(nextState, action);
  nextState = login(nextState, action);
  nextState = hire(nextState, action);
  nextState = {
    ...nextState,
    status: status(nextState.status, action)
  };
  nextState = {
    ...nextState,
    filters: filter(nextState.filters, action)
  }

  return nextState;
}

export {
  goToBands,
  goToLogin,
  goToSearch,
  goToBandArea,
  goToInfo,
  setLogin,
  setHire,
  startFetching,
  endFetching,
  failedFetching
}