import React, { useEffect, useState } from 'react';
import DonutChart from '../../components/DonutChart/DonutChart';
import axios from 'axios';
import './DonutPage.scss';

const DonutPage = () => {
  const [yearLabel, yearLabelSetter] = useState([]);
  const [dataSet, dataSetter] = useState([]);

  useEffect(() => {
    axios.get('https://d3-datasets.firebaseio.com/donut_third_data.json')
      .then(
        response => response.data.forEach(entry => {
          dataSetter(dataSet => [...dataSet, entry.price])
          yearLabelSetter(yearLabel => [...yearLabel, entry.company])
        })
      )
      .catch(error => console.log(error))
  }, []);

    return (
      <div className="donut-container">
        <h1>Donut Chart Page</h1>
        <DonutChart 
          labels={yearLabel}
          data={dataSet}
        />
      </div>
    )
};

export default DonutPage;