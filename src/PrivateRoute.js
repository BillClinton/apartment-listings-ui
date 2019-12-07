import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {
  const auth = useAuth();

  console.log(auth);
  console.log(auth.loggedIn ? 'true' : 'false');
  console.log({ ...rest });

  return (
    <Route
      {...rest}
      render={props =>
        auth.loggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
