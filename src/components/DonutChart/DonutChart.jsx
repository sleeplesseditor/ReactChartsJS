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

    dynamicColors = function() {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      return "rgb(" + r + "," + g + "," + b + ")";
  };

    buildChart = () => {
      const myChartRef = this.chartRef.current.getContext("2d");
      const { data, labels } = this.props;

      const labelColors = [];

      labels.forEach(label => {
        labelColors.push(this.dynamicColors());
        console.log(label)
      })

      if (typeof myDonutChart !== "undefined") myDonutChart.destroy();

      myDonutChart = new Chart(myChartRef, {
        type: "doughnut",
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              fill: false,
              backgroundColor: labelColors,
              borderColor: '#fff',
              borderWidth: 3,
              padding: 120,
            }
          ]
        },
        options: {
          tooltips: {
            displayColors: true,
            titleFontSize: 18,
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