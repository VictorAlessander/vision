import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import { registrationHandler } from '../Register/registrationHandler';
import { AuthContext } from '../../provider/AuthProvider';


class RegisterForm extends Component {

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' }

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value })
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let credentials = { ...this.state }

    registrationHandler(credentials, this.context);

    // this.props.history.push("/")
  }

  render () {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row>
        <h1>Sign up</h1>
        <Col span={12} offset={6} className="column-form">
          <Form onSubmit={this.handleSubmit} className="register-form">
            <Form.Item>
              {
                getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Enter your username' }]
                })(
                  <Input prefix={<Icon type="user" />} placeholder="Username" type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                )
              }
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Enter your password' }]
                })(
                  <Input prefix={<Icon type="lock" />} type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
                )
              }
            </Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" >
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

const WrappedRegisterForm = Form.create({ name: 'register_form' })(RegisterForm);

export default WrappedRegisterForm;