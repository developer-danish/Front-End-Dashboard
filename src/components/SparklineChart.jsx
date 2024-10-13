import React from 'react';
import Chart from 'react-apexcharts';

const SparklineChart = ({data, title}) => {
    const options = {
        chart: {
          type: 'line',
          sparkline: { enabled: true },
        },
        stroke: { width: 2 },
        title: { text: `${title}` },
        yaxis: { title: { text: 'Total' } },
      };
    
      const series = [{ data: data.map((item) => item.total) }];
  return (
    <Chart options={options} series={series} type="line" height={200} width='90%' />
  )
}

export default SparklineChart