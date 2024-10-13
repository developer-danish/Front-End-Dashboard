import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const DateSelector = ({ onDateChange }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const handleChange = (range) => {
       const [start, end] = range;
       setStartDate(start);
       setEndDate(end);
       console.log(start);
       console.log(end);
       onDateChange(start, end);
    }
  return (
    <DatePicker
        selected={startDate} 
        startDate={startDate}
        endDate={endDate}
        onChange={handleChange}
        dateFormat= 'dd/MM/yyyy'
        selectsRange
    />
  )
}

export default DateSelector