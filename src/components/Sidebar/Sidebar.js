import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartArea, faTable, faFolder } from '@fortawesome/free-solid-svg-icons';

library.add(faChartArea, faTable, faFolder);

const Sidebar = (props) => {

  let classes = [
    'sidebar',
    'navbar-nav',
    props.toggled ? 'toggled' : null
  ].join(' ');

  return (
    <ul className={classes}>
      <li className="nav-item active">
        <a className="nav-link" href="#" >
          <FontAwesomeIcon icon="tachometer-alt" />
          <span>Dashboard</span>
        </a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
          <FontAwesomeIcon icon="folder" />
          <span>Pages</span>
        </a>
        <div className="dropdown-menu" aria-labelledby="pagesDropdown">
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
}

export default Sidebar;