import {
  CREATE_APARTMENT,
  READ_APARTMENTS,
  UPDATE_APARTMENT,
  DELETE_APARTMENT
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_APARTMENT: {
      return {
        ...state,
        apartments: [...state.apartments, action.payload.apartment]
      };
    }

    case READ_APARTMENTS: {
      return { ...state, apartments: action.payload };
    }

    case UPDATE_APARTMENT: {
      const apartments = state.apartments;
      const apartment = action.payload.apartment;
      const index = apartments.indexOf(apartment);

      if (~index) {
        apartments[index] = apartment;
        return { ...state, apartments };
      }
      return { ...state };
    }

    case DELETE_APARTMENT: {
      const apartments = state.apartments.filter(
        apt => apt._id !== action.payload
      );
      return { ...state, apartments: apartments };
    }

    default:
      return state;
  }
};
