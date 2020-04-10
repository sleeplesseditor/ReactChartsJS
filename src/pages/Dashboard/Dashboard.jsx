import React, { Component } from 'react';
import classes from "./Dashboard.module.css";
import LineGraph from "../../components/LineGraph/LineGraph";
import chartIcon from "../../assets/chart-icon.svg";
import { managerData, yearLabels } from "../../data/mockData";

export default class Dashboard extends Component {
  state = {
    data: managerData,
    labels: yearLabels
  }

    render() {
        const { data, labels } = this.state;
        return (
          <div className={classes.container}>
            <header className={classes.heading}>
              <img src={chartIcon} alt="bar chart icon" />
              <h1>Sales Dashboard</h1>
            </header>
              <LineGraph
                data={data}
                labels={labels} 
              />
          </div>
        )
    }
}