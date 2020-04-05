import React, { Component } from 'react'
import Chart from 'chart.js';
import classes from './LineGraph.module.css';

class LineGraph extends Component {
  chartRef = React.createRef();
  
  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d');
    
    new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'March'],
        datasets: [
          {
            label: 'Sales',
            data: [86, 67, 91],
          }
        ]
      },
      options: {
        responsive: true
      }
    });
  }
  
  render() {
    return (
      <div class='main-container'>
        <div className={classes.graphContainer}>
          <canvas
            id='myChart'
            ref={this.chartRef}
          />
        </div>
      </div>
    )
  }
}

export default LineGraph;