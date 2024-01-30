import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CalendatPicker.css";

const CalendarPicker = ({ onSelectDate }) => {
  return (
    <div className='container my-4'>
      <DatePicker
        selected={new Date()}
        onChange={onSelectDate}
        inline
        className='custom-datepicker'
      />
    </div>
  );
};

export default CalendarPicker;
