import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SemanticToastContainer } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import AdminHeader from './components/layout/AdminHeader';
import ApartmentStoreProvider from './contexts/ApartmentStore';
import ApartmentHome from './components/admin/apartment/ApartmentHome';
import './App.scss';

function App() {
  return (
    <div className="App">
      <SemanticToastContainer position="top-left" />
      <Router>
        <AdminHeader />
        <ApartmentStoreProvider>
          <Switch>
            <Route path="/admin/apartments">
              <ApartmentHome />
            </Route>
          </Switch>
        </ApartmentStoreProvider>
      </Router>
    </div>
  );
}

export default App;
