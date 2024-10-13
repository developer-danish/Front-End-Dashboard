import { useState } from 'react';
import './App.css';
import data from './files/csvjson.json';
import DateSelector from './components/DateSelector';
import ColumnChart from './components/ColumnChart';
import TimeSeriesChart from './components/TimeSeriesChart';
import SparklineChart from './components/SparklineChart';

function App() {
  const [filteredData, setFilteredData] = useState(data);

  const handleDateChange = (start, end) => {
    const filtered = data.filter(item => {
      const date = new Date(`${item.arrival_date_year}-${item.arrival_date_day_of_month}-${item.arrival_date_month}`);
      return date >= start && date <= end;
    })
    setFilteredData(filtered);
  }
  // console.log(filteredData);

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

  // console.log(countryData);

  const sparklineAdult = filteredData.map(d => ({ total: d.adults }));
  const sparklineChildren = filteredData.map(d => ({ total: d.children }));

  console.log(sparklineAdult);
  console.log(sparklineChildren);


  return (
    <div>
      <DateSelector onDateChange={handleDateChange} />
      <div className="charts">
        <TimeSeriesChart data={filteredData} />
        <hr></hr>
        <ColumnChart data={Object.keys(countryData).map((key) => ({ country: key, visitors: countryData[key] }))} />
        <SparklineChart data={sparklineAdult} title="Total Adult Visitors" />
        <SparklineChart data={sparklineChildren} title="Total Children Visitors" />
      </div>
    </div>
  );
}

export default App;
