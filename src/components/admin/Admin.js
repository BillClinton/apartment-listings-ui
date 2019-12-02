import React from 'react';
import { Route } from 'react-router-dom';

import AdminHeader from '../layout/AdminHeader';
import ApartmentHome from './apartment/ApartmentHome';
import UserHome from './user/UserHome';
import styles from './Admin.module.scss';

function Admin() {
  return (
    <>
      <AdminHeader />
      <main className={styles.content}>
        <Route path="/admin/apartments">
          <ApartmentHome />
        </Route>
        <Route path="/admin/users">
          <UserHome />
        </Route>
      </main>
    </>
  );
}

export default Admin;
