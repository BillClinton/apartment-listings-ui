import React, { createContext, useReducer, useContext } from 'react';
import AuthReducer from '../reducers/AuthReducer';
import { doLogin, doLogout } from '../actions/AuthActions';

const initialState = {
  auth: {
    loggedIn: false,
    email: null,
    name: null,
    surname: null,
    token: null,
    loginFail: false
  }
};

export const AuthContext = createContext();

export function useAuth() {
  const { auth } = useContext(AuthContext);
  return auth;
}

export function useAuthHeader() {
  const { auth } = useContext(AuthContext);
  return auth.authHeader();
}

const AuthContextProvider = props => {
  const session = localStorage.getItem('auth');
  if (session) {
    initialState.auth = JSON.parse(session);
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const authHeader = () => {
    if (state.auth.token) {
      return { headers: { Authorization: `Bearer ${state.auth.token}` } };
    }
    return {};
  };

  const header = authHeader();
  const login = data => doLogin(data, dispatch);
  const logout = () => doLogout(header, dispatch);

  const auth = {
    loggedIn: state.auth.loggedIn,
    email: state.auth.email,
    name: state.auth.name,
    surname: state.auth.surname,
    token: state.auth.token,
    loginFail: state.auth.loginFail,
    login,
    logout,
    authHeader
  };

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
