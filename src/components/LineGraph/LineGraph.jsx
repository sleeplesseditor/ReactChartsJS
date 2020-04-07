import React, { PureComponent } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
let myLineChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class LineGraph extends PureComponent {
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
      const myChartRef = this.chartRef.current.getContext("2d");
      const { data, average, labels } = this.props;

      if (typeof myLineChart !== "undefined") myLineChart.destroy();

      myLineChart = new Chart(myChartRef, {
        type: "line",
        data: {
          //Bring in data
          labels: labels,
          datasets: [
            {
              label: "Sales",
              data: data,
              fill: false,
              borderColor: "#6610f2"
            },
            {
              label: "National Average",
              data: average,
              fill: false,
              borderColor: "#E0E0E0"
            }
          ]
        },
        options: {
          tooltips: {
            displayColors: false,
            titleFontSize: 16,
            bodyFontSize: 14,
            xPadding: 10,
            yPadding: 10,
            callbacks: {
                label: (tooltipItem, data) => {
                    return `$ ${tooltipItem.value}`
                }
            }
          }
        }
      });
    }

    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}