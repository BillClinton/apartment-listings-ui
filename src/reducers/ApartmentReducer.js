import { READ_APARTMENTS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case READ_APARTMENTS:
      return { ...state, apartments: action.payload };

    default:
      return state;
  }
};
