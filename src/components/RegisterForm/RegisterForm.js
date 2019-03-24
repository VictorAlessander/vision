import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';


class RegisterForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.history.push("/")
  }

  render () {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row>
        <h1>Sign up</h1>
        <Col span={12} offset={6} className="column-form">
          <Form onSubmit={this.handleSubmit} className="register-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Enter your username' }]
              })}
              <Input prefix={<Icon type="user" />} placeholder="Username" />
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Enter your password' }]
              })}
              <Input prefix={<Icon type="lock" />} placeholder="Password" />
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