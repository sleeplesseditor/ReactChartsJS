/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import DonutChart from '../../components/DonutChart/DonutChart';
import axios from 'axios';
import './DonutPage.scss';
import DonutChartTable from '../../components/DonutChart/DonutChartTable';

const DonutPage = () => {
  const [yearLabel, yearLabelSetter] = useState([]);
  const [dataSet, dataSetter] = useState([]);
  const [tableData, tableDataSetter] = useState([]);

  // set Table data first, then use table Array to set data and labels

  useEffect(() => {
    axios.get('https://d3-datasets.firebaseio.com/donut_third_data.json')
      .then(
        response => response.data.forEach(entry => {
          tableDataSetter(tableData => [...tableData, entry])
          dataSetter(dataSet => [...dataSet, entry.price])
          yearLabelSetter(yearLabel => [...yearLabel, entry.company])
        })
      )
      .catch(error => console.log(error))
  }, []);
  
  const updateData = (data) => {
    tableDataSetter(data)
    const labelList = [];
    const dataList = [];

    data.forEach(entry => {
      labelList.push(entry.company)
      dataList.push(entry.price);
    })
    dataSetter(dataList)
    yearLabelSetter(labelList)
  }

  const renderChart = () => {
    if (tableData.length === 0) {
      return 'No Data Yet'
    }
    return (
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
    )
  }

    return (
      <div className="donut-container">
        <h1>Donut Chart Page</h1>
        {renderChart()}
      </div>
    )
};

export default DonutPage;