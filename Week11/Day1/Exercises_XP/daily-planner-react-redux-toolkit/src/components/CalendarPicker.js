import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarPicker = ({ onSelectDate }) => {
  return <DatePicker selected={new Date()} onChange={onSelectDate} inline />;
};

export default CalendarPicker;
