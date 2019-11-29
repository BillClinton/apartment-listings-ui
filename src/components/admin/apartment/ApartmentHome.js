import React from 'react';
import { Route } from 'react-router-dom';

import ApartmentStoreProvider from '../../../contexts/ApartmentStore';
import ApartmentList from './ApartmentList';
import NewApartmentForm from './NewApartmentForm';
import EditApartment from './EditApartment';
import DeleteApartment from './DeleteApartment';

function ApartmentHome() {
  return (
    <>
      <ApartmentStoreProvider>
        <Route exact path="/admin/apartments" component={ApartmentList} />
        <Route
          exact
          path="/admin/apartments/new"
          component={NewApartmentForm}
        />
        <Route
          exact
          path="/admin/apartments/edit/:id"
          component={EditApartment}
        />
        <Route
          exact
          path="/admin/apartments/delete/:id"
          component={DeleteApartment}
        />
      </ApartmentStoreProvider>
    </>
  );
}

export default ApartmentHome;
