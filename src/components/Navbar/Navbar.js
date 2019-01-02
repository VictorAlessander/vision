import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faBars, faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons';


library.add(faBell);
library.add(faBars);
library.add(faEnvelope);
library.add(faUserCircle);

const Navbar = (props) => {

  return (
      <nav className="navbar navbar-expand navbar-dark bg-dark static-top">

        <a className="navbar-brand mr-1" href="#">Vision</a>

        <button className="btn btn-link btn-sm text-white order-1 order-sm-0" onClick={props.sideBar}>
          <FontAwesomeIcon icon="bars" />
        </button>

        <ul className="navbar-nav ml-auto ml-md-0">
          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
              <FontAwesomeIcon icon="bell" />
              <span className="badge badge-danger">9+</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
              <a className="dropdown-item">Action</a>
              <a className="dropdown-item">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item">Something else here</a>
            </div>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
              <FontAwesomeIcon icon="envelope" />
              <span className="badge badge-danger">7</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
              <FontAwesomeIcon icon="user-circle" />
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
              <a className="dropdown-item">Settings</a>
              <a className="dropdown-item">Activity Log</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" data-toggle="modal" data-target="#logoutModal" href="#">Logout</a>
            </div>
          </li>
        </ul>

      </nav>
  );
}

export default Navbar;