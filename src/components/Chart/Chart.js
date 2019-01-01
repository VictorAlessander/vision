import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';

library.add(faChartArea);

const Chart = () => {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <FontAwesomeIcon icon="chart-area" />
        Area Chart Example
      </div>
      <div className="card-body">
        <canvas id="myAreaChart" width="100%" height="30"></canvas>
      </div>
      <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
    </div>
  );
}

export default Chart;