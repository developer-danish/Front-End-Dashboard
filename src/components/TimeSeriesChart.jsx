import React from 'react';
import Chart from 'react-apexcharts';

const TimeSeriesChart = ({data}) => {
    const chartOptions = {
        chart: {
          type: 'line',
          zoom: {
            enabled: true
          }
        },
        xaxis: {
          type: 'datetime',
          title: {
            text: 'Date'
          }
        },
        yaxis: {
          title: {
            text: 'Total Visitors'
          }
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Total Visitors Over Time',
          align: 'center'
        }
      };
    
      const chartSeries = [
        {
          name: 'Total Visitors',
          data: data
        }
      ];
    
  return (
    <Chart options={chartOptions} series={chartSeries} type="line" height={360} width='90%' />
  )
}

export default TimeSeriesChart