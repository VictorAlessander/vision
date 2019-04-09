import React from 'react';
import WrappedLoginForm from '../../components/LoginForm/LoginForm';


class Authentication extends React.Component {

  state = { access_token: '', refresh_token: '' }

  render () {
    return <WrappedLoginForm />
  }

}

export default Authentication;