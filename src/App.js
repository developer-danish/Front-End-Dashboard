import { useState } from 'react';
import './App.css';
import data from './files/csvjson.json';
import DateSelector from './components/DateSelector';
import ColumnChart from './components/ColumnChart';
import TimeSeriesChart from './components/TimeSeriesChart';
import SparklineChart from './components/SparklineChart';


function App() {
  const [filteredData, setFilteredData] = useState(data);


  // Filter the data based on date...
  const handleDateChange = (start, end) => {
    const filtered = data.filter(item => {
      const date = new Date(`${item.arrival_date_year}-${item.arrival_date_day_of_month}-${item.arrival_date_month}`);
      return date >= start && date <= end;
    })
    setFilteredData(filtered);
  }

  // Data for timeseries chart...
  const TimeSeriesData = (data) => {
    return data.map(item => {
      const fullDate = new Date(`${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`);
      const totalVisitors = item.adults + item.children + item.babies;

      return {
        x: fullDate.toISOString().split('T')[0],
        y: totalVisitors
      };
    });
  };

  // Data for sparkline adult chart...
  const SparklineAdultData = (data) => {
    return data.map(item => {
      const fullDate = new Date(`${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`);
      return {
        x: fullDate.toISOString().split('T')[0],
        y: item.adults
      };
    });
  };

  // Data for sparkline children chart...
  const SparklineChildrenData = (data) => {
    return data.map(item => {
      const fullDate = new Date(`${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`);
      return {
        x: fullDate.toISOString().split('T')[0],
        y: item.children
      };
    });
  };

  // Data for column chart...
  const countryData = filteredData.reduce((acc, curr) => {
    const country = curr.country;
    const totalVisitors = curr.adults + curr.children + curr.babies;

    if (!acc[country]) {
      acc[country] = totalVisitors;
    } else {
      acc[country] += totalVisitors;
    }

    return acc;
  }, {});


  const s_l_a_Data = SparklineAdultData(filteredData);
  const s_l_c_Data = SparklineChildrenData(filteredData);
  const timeSeriesData = TimeSeriesData(filteredData);


  return (
    <div className='main'>
      <DateSelector onDateChange={handleDateChange} />
      <div className="charts">
        <div className='box'>
          <ColumnChart data={Object.keys(countryData).map((key) => ({ country: key, visitors: countryData[key] }))} />
        </div>
        <div className='box'>
          <TimeSeriesChart data={timeSeriesData} />
        </div>
        <div className='box'>
          <SparklineChart data={s_l_a_Data} title="Total Adult Visitors" />
        </div>
        <div className='box'>
          <SparklineChart data={s_l_c_Data} title="Total Children Visitors" />
        </div>

      </div>
    </div>
  );
}

export default App;
