import React from 'react';
import Header from './components/Header/Header';
import LineGraph from './components/LineGraph/LineGraph';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <Header />
      <LineGraph />
    </React.Fragment>
  );
}

export default App;
