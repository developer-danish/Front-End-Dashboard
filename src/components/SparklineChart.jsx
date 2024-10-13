import React from 'react';
import Chart from 'react-apexcharts';

const SparklineChart = ({ data, title }) => {
    const chartOptions = {
        chart: {
          type: 'line',
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: title,
          align: 'center'
        },
        xaxis: {
          type: 'datetime',
          labels: {
            show: true
          }
        },
        yaxis: {
          labels: {
            show: true
          }
        }
      };
    
      const chartSeries = [
        {
          name: 'Visitors',
          data: data
        }
      ];
    return (
        <Chart options={chartOptions} series={chartSeries} type="line" height={300} width='90%' />
    )
}

export default SparklineChart