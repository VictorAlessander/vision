import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTachometerAlt, faComments, faAngleRight, faList, faShoppingCart, faLifeRing } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleRight, faTachometerAlt, faComments, faList, faShoppingCart, faLifeRing);

const Cards = () => {
  return (
    <div className="row">
      <div className="col-xl-3 col-sm-6 mb-3">
        <div className="card text-white bg-primary o-hidden h-100">
          <div className="card-body">
            <div className="card-body-icon">
              <FontAwesomeIcon icon="comments" />
            </div>
            <div className="mr-5">26 New Messages!</div>
          </div>
          <a className="card-footer text-white clearfix small z-1" href="#">
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
          <a className="card-footer text-white clearfix small z-1" href="#">
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
          <a className="card-footer text-white clearfix small z-1" href="#">
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
          <a className="card-footer text-white clearfix small z-1" href="#">
            <span className="float-left">View Details</span>
            <span className="float-right">
              <FontAwesomeIcon icon="angle-right" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;