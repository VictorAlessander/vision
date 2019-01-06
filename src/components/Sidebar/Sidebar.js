import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartArea, faTable, faFolder } from '@fortawesome/free-solid-svg-icons';

library.add(faChartArea, faTable, faFolder);


class Sidebar extends Component {

  state = {
    'pagesToggled': false
  };

  togglePages = () => {
    this.setState({ 'pagesToggled': !this.state.pagesToggled });
  }

  render () {
    let sideBarClasses = [
      'sidebar',
      'navbar-nav',
      this.props.sideBarToggled ? 'toggled' : null
    ].join(' ');
  
    let pageItemClasses = [
      'nav-item',
      'dropdown',
      this.state.pagesToggled ? 'show' : null
    ].join(' ');
  
    let pagesDropdownClasses = [
      'dropdown-menu',
      this.state.pagesToggled ? 'show' : null
    ].join(' ');

    return (
      <ul className={sideBarClasses}>
        <li className="nav-item active">
          <a className="nav-link" href="#" >
            <FontAwesomeIcon icon="tachometer-alt" />
            <span>Dashboard</span>
          </a>
        </li>
        <li className={pageItemClasses}>
          <a className="nav-link dropdown-toggle" id="pagesDropdown" role="button" aria-haspopup="true" aria-expanded={this.state.pagesToggled ? true : false} href="#" onClick={this.togglePages}>
            <FontAwesomeIcon icon="folder" />
            <span>Pages</span>
          </a>
          <div className={pagesDropdownClasses} aria-labelledby="pagesDropdown">
            <h6 className="dropdown-header">Login Screens:</h6>
            <a className="dropdown-item" href="#">Login</a>
            <a className="dropdown-item" href="#">Register</a>
            <a className="dropdown-item" href="#">Forgot Password</a>
            <div className="dropdown-divider"></div>
            <h6 className="dropdown-header">Other Pages:</h6>
            <a className="dropdown-item" href="#">404 Page</a>
            <a className="dropdown-item" href="#">Blank Page</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <FontAwesomeIcon icon="chart-area" />
            <span>Charts</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <FontAwesomeIcon icon="table" />
            <span>Tables</span></a>
        </li>
      </ul>
    );
  };
}

export default Sidebar;