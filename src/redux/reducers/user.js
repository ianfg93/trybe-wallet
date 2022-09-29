import { GET_USER } from '../actions';

const INITIAL_STATE = {
  user: {},
  wallet: {},
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_USER:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default user;
