// CalendarPicker.js
import "./CalendarPicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarPicker = ({ onSelectDate }) => {
  return <DatePicker selected={new Date()} onChange={(date) => onSelectDate(date)} inline />;
};

export default CalendarPicker;
