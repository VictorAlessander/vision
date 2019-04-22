import React, { Component } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import './components/LoginForm/LoginForm';
import './logo.css';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import WrappedRegisterForm from './components/RegisterForm/RegisterForm';
import Chart from './components/Chart/Chart';
import WrappedCategoryForm from './components/CategoryForm/CategoryForm';
import Categories from './components/Categories/Categories';
import { Authentication } from './components/Authentication/Authentication';
import { PrivateRoute } from './routes/PrivateRoute';
import { AuthContext } from './provider/AuthProvider';
import WrappedDebitsForm from './components/DebitsForm/DebitsForm';

const { Header, Content, Footer } = Layout;

class App extends Component {

  render () {
    return (
      <div className="App">
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <AuthContext.Consumer>
              {context => (
                context.isAuthenticated ? (
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
              )}
            </AuthContext.Consumer>
          </Header>
          <Content style={{ margin: '16px 0' }}>
            <Switch>
              <Route path="/login" exact component={Authentication} />
              <Route path="/register" exact component={WrappedRegisterForm} />
              <PrivateRoute path='/' exact component={Home} />
              <PrivateRoute path="/categories/create" exact component={WrappedCategoryForm} />
              <PrivateRoute path="/categories" exact component={Categories} />
              <PrivateRoute path="/chart" exact component={Chart} />
              <Route path="/debits/create" exact component={WrappedDebitsForm} />
            </Switch>
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
