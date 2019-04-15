import React from 'react';


export default class Auth extends React.Component {

  constructor(props) {
    super(props);
    this.state = { access_token: '', refresh_token: '' };
  }

  render () {
    return (this.props.children);
  }
}