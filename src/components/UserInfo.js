import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const UserInfo = () => {
  const { auth } = useContext(AuthContext);

  return (
    <ul>
      <li>logged in: {auth.loggedIn ? 'true' : 'false'}</li>
      <li>email: {auth.email}</li>
      <li>name:{auth.name}</li>
      <li>surname:{auth.surname}</li>
      <li>token:{auth.token}</li>
    </ul>
  );
};

export default UserInfo;
