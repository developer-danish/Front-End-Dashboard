import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const DateSelector = ({ onDateChange }) => {
    const [startDate, setStartDate] = useState(new Date('2015-07-01'));
    const [endDate, setEndDate] = useState(new Date('2015-08-10'));
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
        className='date'
        selected={startDate} 
        startDate={startDate}
        endDate={endDate}
        onChange={handleChange}
        dateFormat= 'dd/MM/yyyy'
        minDate="2015/07/01"
        maxDate="2015/08/10"
        selectsRange
    />
  )
}

export default DateSelector