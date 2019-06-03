import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import '../../../logo.css';
import { connect } from 'react-redux';

const { Header } = Layout;


const DefaultHeader = ({ isAuthenticated }) => (
  <Header>
    <div className="logo" />
    {
      isAuthenticated ? (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px', float: 'left' }}>
          <Menu.Item key="1"><Link to={{ pathname: '/' }}>Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to={{ pathname: '/chart' }}>Chart</Link></Menu.Item>
          <Menu.Item key="3"><Link to={{ pathname: '/categories' }}>Categories</Link></Menu.Item>
        </Menu>
      ) : (
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px', float: 'left' }}>
            <Menu.Item key="1"><Link to={{ pathname: '/login' }}>Login</Link></Menu.Item>
            <Menu.Item key="2"><Link to={{ pathname: '/register' }}>Register</Link></Menu.Item>
          </Menu>
        )
    }
  </Header>
)

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authenticated
  }
}

export default connect(mapStateToProps)(DefaultHeader);