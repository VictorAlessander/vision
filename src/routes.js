import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Home from './components/Home/Home';
import WrappedRegisterForm from './components/RegisterForm/RegisterForm';
import Chart from './components/Chart/Chart';
import WrappedCategoryForm from './components/CategoryForm/CategoryForm';
import Categories from './components/Categories/Categories';
import { Authentication } from './components/Authentication/Authentication';
import WrappedDebitsForm from './components/DebitsForm/DebitsForm';
import { connect } from 'react-redux';


class Routes extends React.Component {
  render () {
    return (
      <Switch>
        <Route path="/login" exact component={Authentication} />
        <Route path="/register" exact component={WrappedRegisterForm} />
        <PrivateRoute path='/' exact component={Home} isAuthenticated={this.props.isAuthenticated} />
        <PrivateRoute path="/categories/create" exact component={WrappedCategoryForm} isAuthenticated={this.props.isAuthenticated} />
        <PrivateRoute path="/categories" exact component={Categories} isAuthenticated={this.props.isAuthenticated} />
        <PrivateRoute path="/chart" exact component={Chart} isAuthenticated={this.props.isAuthenticated} />
        <Route path="/debits/create" exact component={WrappedDebitsForm} isAuthenticated={this.props.isAuthenticated} />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authenticated
  }
}

export default connect(mapStateToProps)(Routes);