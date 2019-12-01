import React, { createContext, useReducer, useEffect } from 'react';
import UserReducer from '../reducers/UserReducer';
import {
  createUser,
  readUser,
  readUsers,
  updateUser,
  deleteUser
} from '../actions/UserActions';

export const UserStore = createContext();

const initialState = {
  users: []
};

const UserStoreProvider = props => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  const create = data => createUser(data, dispatch);
  const load = () => readUsers(dispatch);
  const loadOne = id => readUser(id, dispatch);
  const update = (id, data) => updateUser(id, data, dispatch);
  const destroy = id => deleteUser(id, dispatch);

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
