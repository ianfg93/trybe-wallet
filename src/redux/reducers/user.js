import { GET_USER } from '../actions';

const INITIAL_STATE = {
  user: { email: '' },
  wallet: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_USER:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
