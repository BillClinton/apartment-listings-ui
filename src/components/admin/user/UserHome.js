import React from 'react';
import { Route } from 'react-router-dom';

import UserStoreProvider from '../../../contexts/UserStore';
import UserList from './UserList';
import NewUserForm from './NewUserForm';
import EditUser from './EditUser';
import DeleteUser from './DeleteUser';

function UserHome() {
  return (
    <>
      <UserStoreProvider>
        <Route exact path="/admin/users" component={UserList} />
        <Route exact path="/admin/users/new" component={NewUserForm} />
        <Route exact path="/admin/users/edit/:id" component={EditUser} />
        <Route exact path="/admin/users/delete/:id" component={DeleteUser} />
      </UserStoreProvider>
    </>
  );
}

export default UserHome;
