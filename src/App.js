import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import './components/LoginForm/LoginForm';
import WrappedLoginForm from './components/LoginForm/LoginForm';
import './logo.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render () {
    return (
      <div className="App">
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
              <Menu.Item key="1">Home</Menu.Item>
            </Menu>
          </Header>
          <Content style={{margin: '16px 0'}}>
            <WrappedLoginForm />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Vision @2019 Created by Victor Alessander
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
