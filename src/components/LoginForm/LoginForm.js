import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import './LoginForm.css';

class LoginForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.history.push("/")
  };

  render () {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row>
        <Col span={12} offset={6}>
          <Form onSubmit={this.handleSubmit}>
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
            <a className="login-form-forgot" href="#">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Login
            </Button>
            Or <a href="#">register now</a>
          </Form>
        </Col>
      </Row>
    );
  };
};

const WrappedLoginForm = Form.create({ name: 'login_form' })(LoginForm);

export default WrappedLoginForm;