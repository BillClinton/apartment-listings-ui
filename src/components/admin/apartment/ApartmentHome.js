import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ApartmentStoreProvider from '../../../contexts/ApartmentStore';
import ApartmentList from './ApartmentList';
import NewApartmentForm from './NewApartmentForm';
import EditApartmentForm from './EditApartmentForm';
import DeleteApartment from './DeleteApartment';

function ApartmentHome() {
  return (
    <Router>
      <ApartmentStoreProvider>
        <Switch>
          <Route exact path="/admin/apartments">
            <ApartmentList />
          </Route>
          <Route path="admin/apartments/new">
            <NewApartmentForm />
          </Route>
          <Route path="admin/apartments/edit/:id">
            <EditApartmentForm />
          </Route>
          <Route path="admin/apartments/delete/:id">
            <DeleteApartment />
          </Route>
        </Switch>
      </ApartmentStoreProvider>
    </Router>
  );
}

export default ApartmentHome;
