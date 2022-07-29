import React, { useState, useEffect } from "react";
import "./BookAppointmentP1.scss";
import SideBar from "../../../Side-Bar/SideBar";
import DatePicker from "sassy-datepicker";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const BookAppointmentP1 = () => {
  const [time, settime] = useState(new Date());
  const [duration, setduration] = useState(30);
  const [date, setdate] = useState(new Date());

  const onDateChange = (date) => {
    setdate(date);
  };

  useEffect(() => {
    console.log(time, duration, date);
  });

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
          <div className="right-container">
            <div className="duration-container">
              <label style={{ fontSize: "large" }}>
                How long should the meeting take?
              </label>
              <br />
              <br />
              <Box sx={{ minWidth: 180 }}>
                <FormControl style={{ minWidth: 180 }}>
                  <InputLabel id="demo-simple-select-label">
                    Duration
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={duration}
                    label="Duration"
                    onChange={setduration}
                  >
                    <MenuItem value={15}>15 minutes</MenuItem>
                    <MenuItem value={30}>30 minutes</MenuItem>
                    <MenuItem value={45}>45 minutes</MenuItem>
                    <MenuItem value={60}>60 minutes</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="time-picker">
              <label>Please select a time of day</label>
              <br />
              <br />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  style={{ fontSize: "large" }}
                  label="Select Time"
                  value={time}
                  onChange={(newValue) => {
                    settime(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
        <div className="base-container">
          <div>
            <h1 style={{ marginLeft: -300 }}>{date.toDateString()}</h1>
            <span>
              <h1 style={{ marginLeft: -300 }}>
                {time.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </h1>
              <h3 style={{ marginLeft: -300 }}>
                {time.toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1]}
              </h3>
            </span>
          </div>
          <div className="confirm-button">
            <button>Confirm Time</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentP1;
