import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import './LoginForm.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.history.push("/")
  };

  handleUsernameChange = (event) => {
    this.props.form.setFieldsValue({ username: event.target.value })
    this.setState({ username: this.props.form.getFieldValue('username') })
  }

  handlePasswordChange = (event) => {
    this.props.form.setFieldsValue({ password: event.target.value })
    this.setState({ password: this.props.form.getFieldValue('password') })
  }

  render () {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row>
        <h1>Sign in</h1>
        <Col span={12} offset={6} className="column-form">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {
                getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Enter your username' }]
                })(
                  <Input prefix={<Icon type="user"></Icon>} placeholder="Username" type="text" onChange={this.handleUsernameChange} />
                )
              }
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Enter your password' }]
                })(
                  <Input prefix={<Icon type="lock"></Icon>} placeholder="Password" type="password" onChange={this.handlePasswordChange} />
                )
              }
            </Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Login
            </Button>
            <Link to={{ pathname: "/register" }} className="register-now">Register now</Link>
            <Link to={{ pathname: "/forgot_password" }} className="forgot-password">Forgot password</Link>
          </Form>
        </Col>
      </Row>
    );
  };
};

const WrappedLoginForm = Form.create({ name: 'login_form' })(LoginForm);

export default withRouter(WrappedLoginForm);