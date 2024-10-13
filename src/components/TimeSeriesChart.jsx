import React from 'react';
import Chart from 'react-apexcharts';

const TimeSeriesChart = ({data}) => {
    const options = {
        chart: {
            id: 'timeseries',
            zoom: { enabled: true },
          },
          xaxis: {
            type: 'datetime',
          },
          yaxis: {
            title: { text: 'Number of Visitors' },
          },
          stroke: {
            curve: 'smooth'
          }
    };

    const series = [
        {
            name: 'Visitors',
            data: data.map((item) => [new Date(`${item.arrival_date_year}-${item.arrival_date_day_of_month}-${item.arrival_date_month}`).getTime(), item.adults + item.children + item.babies]),
          },
    ];
  return (
    <Chart options={options} series={series} type="line" height={360} />
  )
}

export default TimeSeriesChart