import React from 'react';
import { Form, Icon, Input, Button, Row, Col, notification } from 'antd';
import './LoginForm.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {AuthContext} from '../../provider/AuthProvider';

class LoginForm extends React.Component {

  static contextType = AuthContext;

  constructor(props, context) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  openNotification = (title, content) => {
    notification.open({
      message: title,
      description: content
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let credentials = { ...this.state };

    // this.props.history.push("/") ? loginHandler(credentials) : console.log('Something went wrong');
    // console.log('Authenticated') ? this.props.login(credentials) : console.log('Something went wrong');
    // this.context.login(credentials);

    // console.log(this.context);

    this.context.login(credentials).then(response => {
      if (response.ok) {
        response.json().then(data => {
          if (data.message !== 'User not found') {
            this.context.access_token = data.access_token;
            this.context.refresh_token = data.refresh_token;
            this.context.isAuthenticated = true;
          }
          else {
            this.openNotification('Login status', data.message);
          }
        })
      }
      else if (response.status === 401) {
        console.log('Unauthorized');
      }
    }).catch(err => {
      console.log(err);
    });

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
    )
  }
}

const WrappedLoginForm = Form.create({ name: 'login_form' })(LoginForm);

export default withRouter(WrappedLoginForm);