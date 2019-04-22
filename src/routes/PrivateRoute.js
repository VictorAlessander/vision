import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


export const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <AuthContext.Consumer>
      {context => (
        <Route {...rest} render={
          (props) => context.isAuthenticated ? (<Component {...props} />) : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
        } />
      )}
    </AuthContext.Consumer>
  );
};