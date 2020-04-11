import React, { useEffect, useState } from 'react';
import DonutChart from '../../components/DonutChart/DonutChart';
import axios from 'axios';
import './DonutPage.scss';
import DonutChartTable from '../../components/DonutChart/DonutChartTable';

const DonutPage = () => {
  const [yearLabel, yearLabelSetter] = useState([]);
  const [dataSet, dataSetter] = useState([]);
  const [tableData, tableDataSetter] = useState([]);

  useEffect(() => {
    axios.get('https://d3-datasets.firebaseio.com/donut_third_data.json')
      .then(
        response => response.data.forEach(entry => {
          dataSetter(dataSet => [...dataSet, entry.price])
          yearLabelSetter(yearLabel => [...yearLabel, entry.company])
          tableDataSetter(tableData => [...tableData, entry]);
        })
      )
      .catch(error => console.log(error))
  }, []);

  console.log('TABLE DATA', tableData);

  const updateData = (data) => {
    dataSetter({ data })
    yearLabelSetter({ data })
    tableDataSetter({ data })
  }

    return (
      <div className="donut-container">
        <h1>Donut Chart Page</h1>
        <div className="donut-container-graphs">
          <DonutChart 
            labels={yearLabel}
            data={dataSet}
          />
          <DonutChartTable 
            data={tableData}
            updateData={updateData} 
          />
        </div>
      </div>
    )
};

export default DonutPage;