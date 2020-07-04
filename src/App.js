import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import LazyLoader from './components/LazyLoader/LazyLoader';
import './App.scss';

const DashboardPage = React.lazy(() => import('./pages/Dashboard/Dashboard'));
const DonutPage = React.lazy(() => import('./pages/DonutPage/DonutPage'));
const MultiDashboardPage = React.lazy(() => import('./pages/MultiDashboard/MultiDashboard'));

function App() {
  return (
    <Router>
    <Header />
      <Switch>
        <Route exact path="/" component={LazyLoader(DashboardPage)} />
        <Route exact path="/donut-chart" component={LazyLoader(DonutPage)} />
        <Route exact path="/dashboard" component={LazyLoader(MultiDashboardPage)} />
      </Switch>
  </Router>
  );
}

export default App;
