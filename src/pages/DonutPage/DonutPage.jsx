import React, { useEffect, useState } from 'react';
import DonutChart from '../../components/DonutChart/DonutChart';
import './DonutPage.scss';
import { managerData, yearLabels } from "../../data/mockData";

const DonutPage = () => {
  const [yearLabel, yearLabelSetter] = useState();
  const [data, dataSetter] = useState();

  useEffect(() => {
    yearLabelSetter(yearLabels);
    dataSetter(managerData);
  }, []);

    return (
      <div className="donut-container">
        <h1>Donut Chart Page</h1>
        <DonutChart 
          labels={yearLabel}
          data={data}
        />
      </div>
    )
};

export default DonutPage;