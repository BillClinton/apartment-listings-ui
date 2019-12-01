import React from 'react';
import { Route } from 'react-router-dom';

import AdminHeader from '../layout/AdminHeader';
import ApartmentHome from './apartment/ApartmentHome';
import UserHome from './user/UserHome';

function Admin() {
  return (
    <>
      <AdminHeader />
      <Route path="/admin/apartments">
        <ApartmentHome />
      </Route>
      <Route path="/admin/users">
        <UserHome />
      </Route>
    </>
  );
}

export default Admin;
