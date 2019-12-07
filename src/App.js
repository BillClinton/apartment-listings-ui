import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { SemanticToastContainer } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import Admin from './components/admin/Admin';
import history from './history';
import './App.scss';
import AuthContextProvider from './contexts/AuthContext';
import LoginForm from './components/admin/auth/LoginForm';
import Logout from './components/admin/auth/Logout';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <SemanticToastContainer position="top-left" />
        <Router history={history}>
          <Switch>
            <Route exact path="/">
              <div>homepage goes here</div>
            </Route>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/logout" component={Logout} />
            <PrivateRoute path="/admin" component={Admin} />
          </Switch>
        </Router>
      </div>
    </AuthContextProvider>
  );
}

export default App;
