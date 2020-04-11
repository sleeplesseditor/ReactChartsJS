import React, { PureComponent } from 'react'
import Chart from "chart.js";
import './DonutChart.scss';

let myDonutChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class DonutChart extends PureComponent {
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
      const myChartRef = this.chartRef.current.getContext("2d");
      const { data, labels } = this.props;

      if (typeof myDonutChart !== "undefined") myDonutChart.destroy();

      myDonutChart = new Chart(myChartRef, {
        type: "doughnut",
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Company',
              data: data,
              fill: true,
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'transparent',
              padding: 120,
            }
          ]
        },
        options: {
          tooltips: {
            displayColors: false,
            titleFontSize: 16,
            bodyFontSize: 14,
            xPadding: 20,
            yPadding: 20,
          }
        }
      });
    }

    render() {
      return (
        <div className="canvas-container">
          <canvas
            id="myChart"
            ref={this.chartRef}
          />
        </div>
      )
    }
}