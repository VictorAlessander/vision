import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

library.add(faChartArea);

class Chart extends Component {

  state = {
    'data': {
      labels: [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ],
      datasets: [
        {
          label: "LineChart",
          fill: true,
          data: [10, 15, 20, 17, 5, 33, 94, 22, 13, 84, 55, 88, 100]
        }
      ]
    }
  }

  render () {
    return (
      <div className="card mb-3">
        <div className="card-header">
          <FontAwesomeIcon icon="chart-area" />
          Area Chart Example
      </div>
        <div className="card-body">
          <Line data={this.state.data} options={null} width="600" height="250" />
        </div>
        <div className="card-footer small text-muted">Updated at {moment().format('LT')}</div>
      </div>
    );
  };
};

export default Chart;