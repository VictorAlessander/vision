import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
import './Chart.css';

class Chart extends Component {

  render () {
    const data = {
      labels: ['January', 'February'],
      datasets: [{
        label: 'Debits',
        data: [450.00, 300.00]
      }]
    }
    return (
      <div className="chart">
        <Line data={data} width="600" height="300" options={{ maintainAspectRatio: false, responsive: false }} />
      </div>
    );
  }
}

export default Chart;