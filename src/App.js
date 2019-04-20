import React, { Component } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import './components/LoginForm/LoginForm';
import './logo.css';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import WrappedRegisterForm from './components/RegisterForm/RegisterForm';
import Chart from './components/Chart/Chart';
import WrappedCategoryForm from './components/CategoryForm/CategoryForm';
import Categories from './components/Categories/Categories';
import { Authentication } from './components/Authentication/Authentication';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render () {
    return (
      <div className="App">
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px', float: 'left' }}>
              <Menu.Item key="1"><Link to={{ pathname: '/' }}>Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to={{ pathname: '/chart' }}>Chart</Link></Menu.Item>
              <Menu.Item key="3"><Link to={{ pathname: '/categories' }}>Categories</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ margin: '16px 0' }}>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={WrappedRegisterForm} />
            <Route path="/categories/create" exact component={WrappedCategoryForm} />
            <Route path="/categories" exact component={Categories} />
            <Route path="/chart" exact component={Chart} />
            <Route path="/login" exact component={Authentication} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Vision @2019 Created by Victor Alessander
          </Footer>
        </Layout>
      </div>
    );
  };
};

export default App;
