import React from 'react';
// import { AuthContext } from '../../provider/AuthProvider';
import WrappedLoginForm from '../LoginForm/LoginForm';


export const Login = (props) => {
  return (
    // <AuthContext.Consumer>
    //   {context => <WrappedLoginForm login={context.login} />}
    // </AuthContext.Consumer>
    <WrappedLoginForm />
  );
}