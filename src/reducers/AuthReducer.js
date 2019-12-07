import { LOGIN, LOGOUT } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN: {
      let auth = {
        email: action.payload.user.email,
        name: action.payload.user.name,
        surname: action.payload.user.surname,
        token: action.payload.token,
        loggedIn: true
      };

      localStorage.setItem('auth', JSON.stringify(auth));

      return { ...state, auth };
    }

    case LOGOUT: {
      localStorage.removeItem('auth');
      return {
        ...state,
        auth: {
          loggedIn: false,
          email: null,
          name: null,
          surname: null,
          token: null
        }
      };
    }

    default:
      return state;
  }
};
