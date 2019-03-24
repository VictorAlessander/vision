import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import './LoginForm.css';
import { Link } from 'react-router-dom';


class LoginForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.history.push("/")
  };

  render () {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row>
        <h1>Sign in</h1>
        <Col span={12} offset={6} className="column-form">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Enter your username' }]
              })}
              <Input prefix={<Icon type="user"></Icon>} placeholder="Username" />
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Enter your password' }]
              })}
              <Input prefix={<Icon type="lock"></Icon>} placeholder="Password" />
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

export default WrappedLoginForm;