import React, { Component } from 'react';
import './MultiDashboard.scss';
import { getFeeds } from '../../components/Dashboard/Helpers';
import BarChart from '../../components/Dashboard/BarChart';

class MultiDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feeds: getFeeds()
    };
  }
  
  render() {
    return (
      <div className="dashboard-container">
        <h2>Dashboard</h2>
        <div className="dashboard-container-main">
          
        </div>
        <div className="dashboard-container-sub">
          <BarChart 
            data={this.state.feeds[1].data}
            title={this.state.feeds[1].title}
            color="#70CAD1"
          />
        </div>
        <div className="dashboard-container-sub">

        </div>
        <div className="dashboard-container-sub">

        </div>
      </div>
    )
  }
}

export default MultiDashboard;