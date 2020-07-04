import React, { Component } from 'react';
import './MultiDashboard.scss';
import { getFeeds } from '../../components/Dashboard/Helpers';
import BarChart from '../../components/Dashboard/BarChart';
import LineChart from '../../components/Dashboard/LineChart';
import DonutChart  from '../../components/Dashboard/DonutChart';

class MultiDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feeds: getFeeds()
    };
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        feeds: getFeeds()
      })
    }, 5000)
  }
  
  render() {
    return (
      <div className="dashboard-container">
        <h1 className="dashboard-container-heading">Dashboard Page</h1>
        <div className="dashboard-container-main">
          <LineChart 
            data={this.state.feeds[0].data}
            title={this.state.feeds[0].title}
            color="#3E517A"
          />
        </div>
        <div className="subchart-container">
          <div className="dashboard-container-sub">
            <BarChart 
              data={this.state.feeds[1].data}
              title={this.state.feeds[1].title}
              color="#70CAD1"
            />
          </div>
          <div className="dashboard-container-sub">
            <BarChart 
              data={this.state.feeds[2].data}
              title={this.state.feeds[2].title}
              color="#e8173a"
            />
          </div>
          <div className="dashboard-container-sub">
            <DonutChart
              data={this.state.feeds[3].data}
              title={this.state.feeds[3].title}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default MultiDashboard;