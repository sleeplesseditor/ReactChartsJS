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
      this.props.labels.forEach(label => {
        this.labelColors.push(this.dynamicColors());
      })

      myDonutChart.data.labels = this.props.labels;
      myDonutChart.data.datasets[0].data = this.props.data;
      myDonutChart.update();
    }

    labelColors = [];

    dynamicColors = function() {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      return "rgb(" + r + "," + g + "," + b + ")";
  };

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
              data: data,
              fill: false,
              backgroundColor: this.labelColors,
              borderColor: '#fff',
              borderWidth: 0,
              padding: 120,
            }
          ]
        },
        options: {
          maintainAspectRatio: true,
          tooltips: {
            displayColors: true,
            titleFontSize: 20,
            bodyFontSize: 16,
            xPadding: 20,
            yPadding: 20,
            callbacks: {
              label: (tooltipItem, data, index) => {
                return `${data.labels[tooltipItem.index]}: $${Number(`${data.datasets[0].data[tooltipItem.index]}`).toLocaleString('en')}`
              }
            }
          },
          animation: {
            animateRotate: true,
            animateScale: true,
          },
        },
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