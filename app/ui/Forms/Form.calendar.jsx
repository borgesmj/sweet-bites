import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
const FormCalendar = ({ setDeliveryDate }) => {
  const startDate = () => {
    const today = new Date();
    const twoDaysAfter = today.setDate(today.getDate() + 2);
    return twoDaysAfter;
  };
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="campo w-full flex flex-col justify-start items-center ">
      <p>Fecha de entrega</p>
      <div className="flex flex-row justify-start gap-4 items-center">
        <label htmlFor="calendar">
          <FaCalendarAlt size={32} />
        </label>
        <DatePicker
          id="calendar"
          dateFormat="dd/MM/yyyy"
          className=" h-12 w-60 outline-none bg-transparent"
          calendarClassName="bg-red-900"
          required
          selected={selectedDate}
          minDate={startDate()}
          maxDate={`2024/12/24`}
          autoComplete="off"
          onChange={(date) => {
            setDeliveryDate(date);
            setSelectedDate(date);
          }}
          placeholderText="Selecciona una fecha"
        />{" "}
      </div>
    </div>
  );
};

export default FormCalendar;
