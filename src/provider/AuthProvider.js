import React from 'react';
import {
  BILLING_MANAGER_BASE_PATH,
  BILLING_MANAGER_LOGIN_PATH,
  BILLING_HEADERS
} from '../constants/BillingManager';

export const AuthContext = React.createContext();

class AuthProvider extends React.Component {

  constructor(props, context) {
    super(props);
    this.state = {
      access_token: '123',
      refresh_token: '',
      isAuthenticated: false
    }
  }

  isAuthenticated = () => {
    return this.state.isAuthenticated;
  }

  async login (credentials) {
    const req = await fetch(
      BILLING_MANAGER_BASE_PATH + BILLING_MANAGER_LOGIN_PATH,
      {
        headers: BILLING_HEADERS,
        method: 'POST',
        body: JSON.stringify(credentials)
      }
    )
    // ).then(response => {
    //   if (response.ok) {
    //     response.json().then(data => {
    //       console.log(data);
    //       return data;
    //     })
    //   }
    //   else if (response.status === 401) {
    //     console.log('Unauthorized');
    //     return false;
    //   }
    // }).catch(err => {
    //   console.log(err);
    //   return false;
    // })

    return req;

  }

  render () {
    return (
      <AuthContext.Provider value={{...this.state, login: this.login}} >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export const Consumer = AuthContext.Consumer;

export default AuthProvider;