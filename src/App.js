import React from 'react';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Dashboard />
    </React.Fragment>
  );
}

export default App;
