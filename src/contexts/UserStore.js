import React, { createContext, useReducer, useEffect } from 'react';
import { useAuthHeader } from '../contexts/AuthContext';
import UserReducer from '../reducers/UserReducer';
import {
  createUser,
  readUser,
  readUsers,
  updateUser,
  deleteUser
} from '../actions/UserActions';

const initialState = {
  users: []
};

export const UserStore = createContext();

const UserStoreProvider = props => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  const authHeader = useAuthHeader();

  const create = data => createUser(data, authHeader, dispatch);
  const load = () => readUsers(authHeader, dispatch);
  const loadOne = id => readUser(id, authHeader, dispatch);
  const update = (id, data) => updateUser(id, data, authHeader, dispatch);
  const destroy = id => deleteUser(id, authHeader, dispatch);

  useEffect(load, []);

  const store = {
    data: state.users,
    edit: state.user,
    create,
    load,
    loadOne,
    update,
    destroy
  };

  return (
    <UserStore.Provider value={{ store, dispatch }}>
      {props.children}
    </UserStore.Provider>
  );
};

export default UserStoreProvider;
