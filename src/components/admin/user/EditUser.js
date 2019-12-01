import React, { useContext } from 'react';
import { UserStore } from '../../../contexts/UserStore';
import EditUserForm from './EditUserForm';

const EditUser = ({ match }) => {
  const { store } = useContext(UserStore);
  const id = match.params.id;
  let user = store.edit;

  if (!user || user._id !== id) {
    user = null;
    store.loadOne(id);
  }

  return user ? <EditUserForm user={user} /> : <div>loading form...</div>;
};

export default EditUser;
