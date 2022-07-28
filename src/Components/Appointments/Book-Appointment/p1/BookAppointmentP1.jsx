import React, { useState } from "react";
import "./BookAppointmentP1.scss";
import SideBar from "../../../Side-Bar/SideBar";
import DatePicker from "sassy-datepicker";

const BookAppointmentP1 = () => {
  const [time, settime] = useState({
    start: "00:00",
  });
  const onDateChange = (date) => {
    console.log(date.toString());
  };
  const onTimeChange = (time) => {
    settime(time);
    console.log(time);
  };

  return (
    <div className="rowC">
      <SideBar />
      <div className="main-container">
        <h1>
          Select Your Preferred{" "}
          <span style={{ color: "red" }}>Appointment</span>
        </h1>
        <div className="float-container">
          <div className="calendar-container">
            <h2>Which Date Do You Prefer?</h2>
            <DatePicker onChange={onDateChange} />
          </div>
          <p class="seven">
            <label>How long should the meeting take?</label>
            <span class="ng-invalid">
              <input
                type="text"
                class="datalist"
                list="datalistTest"
                name="state"
              />
            </span>
            <datalist id="datalistTest">
              <option value="00:15" />
              <option value="00:30" />
              <option value="00:45" />
              <option value="01:00" />
            </datalist>
            <label>Please select a time of day</label>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentP1;
