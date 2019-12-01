import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { SemanticToastContainer } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import Admin from './components/admin/Admin';
import history from './history';
import './App.scss';

function App() {
  return (
    <div className="App">
      <SemanticToastContainer position="top-left" />
      <Router history={history}>
        <Route path="/admin">
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
