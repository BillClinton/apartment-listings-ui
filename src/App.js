import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SemanticToastContainer } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import ApartmentStoreProvider from './contexts/ApartmentStore';
import ApartmentList from './components/apartment/ApartmentList';
import NewApartmentForm from './components/apartment/NewApartmentForm';
import EditApartmentForm from './components/apartment/EditApartmentForm';
import AdminHeader from './components/layout/AdminHeader';
import DeleteApartment from './components/apartment/DeleteApartment';
import './App.scss';

function App() {
  return (
    <div className="App">
      <SemanticToastContainer position="top-left" />
      <Router>
        <AdminHeader />
        <ApartmentStoreProvider>
          <Switch>
            <Route exact path="/">
              <ApartmentList />
            </Route>
            <Route path="/new">
              <NewApartmentForm />
            </Route>
            <Route path="/edit/:id">
              <EditApartmentForm />
            </Route>
            <Route path="/delete/:id">
              <DeleteApartment />
            </Route>
          </Switch>
        </ApartmentStoreProvider>
      </Router>
    </div>
  );
}

export default App;
