import React from 'react';
import Chart from 'react-apexcharts';

const ColumnChart = ({data}) => {
    const options = {
        chart: { type: 'bar' },
        xaxis: { categories: data.map((item) => item.country) },
        yaxis: { title: { text: 'Number of Visitors' } },
      };
    
    const series = [{ name: 'Visitors', data: data.map((item) => item.visitors) }];

  return (
    <Chart options={options} series={series} type="bar" height={360} width='90%' />
  )
}

export default ColumnChart