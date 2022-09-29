import { GET_WALLET } from '../actions';

const INITIAL_STATE = {
  user: {},
  wallet: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_WALLET:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default wallet;
