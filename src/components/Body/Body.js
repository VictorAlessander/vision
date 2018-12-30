import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartArea, faTable, faFolder, faTachometerAlt, faComments, faAngleRight, faList, faShoppingCart, faLifeRing } from '@fortawesome/free-solid-svg-icons';

library.add(faChartArea, faTable, faAngleRight, faFolder, faTachometerAlt, faComments, faList, faShoppingCart, faLifeRing);

const Body = () => {
  return (
    <div id="wrapper">

      <ul className="sidebar navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" >
            <FontAwesomeIcon icon="tachometer-alt" />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <FontAwesomeIcon icon="folder" />
            <span>Pages</span>
          </a>
          <div className="dropdown-menu" aria-labelledby="pagesDropdown">
            <h6 className="dropdown-header">Login Screens:</h6>
            <a className="dropdown-item" >Login</a>
            <a className="dropdown-item" >Register</a>
            <a className="dropdown-item" >Forgot Password</a>
            <div className="dropdown-divider"></div>
            <h6 className="dropdown-header">Other Pages:</h6>
            <a className="dropdown-item" >404 Page</a>
            <a className="dropdown-item" >Blank Page</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" >
            <FontAwesomeIcon icon="chart-area" />
            <span>Charts</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >
            <FontAwesomeIcon icon="table" />
            <span>Tables</span></a>
        </li>
      </ul>

      <div id="content-wrapper">

        <div className="container-fluid">

          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a>Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Overview</li>
          </ol>

          <div className="row">
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-primary o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <FontAwesomeIcon icon="comments" />
                  </div>
                  <div className="mr-5">26 New Messages!</div>
                </div>
                <a className="card-footer text-white clearfix small z-1">
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <FontAwesomeIcon icon="angle-right" />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-warning o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <FontAwesomeIcon icon="list" />
                  </div>
                  <div className="mr-5">11 New Tasks!</div>
                </div>
                <a className="card-footer text-white clearfix small z-1">
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <FontAwesomeIcon icon="angle-right" />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-success o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <FontAwesomeIcon icon="shopping-cart" />
                  </div>
                  <div className="mr-5">123 New Orders!</div>
                </div>
                <a className="card-footer text-white clearfix small z-1">
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <FontAwesomeIcon icon="angle-right" />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-danger o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <FontAwesomeIcon icon="life-ring" />
                  </div>
                  <div className="mr-5">13 New Tickets!</div>
                </div>
                <a className="card-footer text-white clearfix small z-1">
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <FontAwesomeIcon icon="angle-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-header">
              <i className="fas fa-chart-area"></i>
              Area Chart Example</div>
            <div className="card-body">
              <canvas id="myAreaChart" width="100%" height="30"></canvas>
            </div>
            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
          </div>

          <div className="card mb-3">
            <div className="card-header">
              <FontAwesomeIcon icon="table" />
              Data Table Example</div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>2011/04/25</td>
                      <td>$320,800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;