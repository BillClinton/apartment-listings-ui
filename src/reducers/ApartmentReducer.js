import { CREATE_APARTMENT, READ_APARTMENTS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_APARTMENT:
      return {
        ...state,
        apartments: [...state.apartments, action.payload.apartment]
      };
    case READ_APARTMENTS:
      return { ...state, apartments: action.payload };

    default:
      return state;
  }
};
