import { LOGIN, LOGOUT, LOGIN_FAIL } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN: {
      let auth = {
        loggedIn: true,
        email: action.payload.user.email,
        name: action.payload.user.name,
        surname: action.payload.user.surname,
        token: action.payload.token,
        loginFail: false
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
          token: null,
          loginFail: false
        }
      };
    }

    case LOGIN_FAIL: {
      localStorage.removeItem('auth');
      return {
        ...state,
        auth: {
          loggedIn: false,
          email: null,
          name: null,
          surname: null,
          token: null,
          loginFail: true
        }
      };
    }

    default:
      return state;
  }
};
