import React, { Component } from 'react';
import { Chart } from 'chart.js';
import { dynamicColors } from '../../components/Dashboard/Helpers';

class DonutChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const colorLabel = this.props.data.map(d => d.label);
    colorLabel.forEach(label => {
      this.labelColors.push(dynamicColors());
    })
    this.myChart = new Chart(this.chartRef.current, {
      type: 'doughnut',
      options: {
        maintainAspectRatio: false
      },
      data: {
        labels: this.props.data.map(d => d.label),
        datasets: [{
          data: this.props.data.map(d => d.value),
          backgroundColor: this.labelColors
        }]
      }
    });
  }

  labelColors = [];

  componentDidUpdate() {
    this.myChart.data.labels = this.props.data.map(d => d.label);
    this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
    this.myChart.update();
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}

export default DonutChart;