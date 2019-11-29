import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { SemanticToastContainer } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import AdminHeader from './components/layout/AdminHeader';
import ApartmentHome from './components/admin/apartment/ApartmentHome';
import history from './history';
import './App.scss';

function App() {
  return (
    <div className="App">
      <SemanticToastContainer position="top-left" />
      <Router history={history}>
        <AdminHeader />
        <Route path="/admin/apartments">
          <ApartmentHome />
        </Route>
      </Router>
    </div>
  );
}

export default App;
