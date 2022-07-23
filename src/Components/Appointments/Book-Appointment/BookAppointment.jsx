import React from "react";
import SideBar from "../../Side-Bar/SideBar";
import "./BookAppointment.scss";
import { BsCalendar3, BsPuzzle, BsCheck2 } from "react-icons/bs";
import { RiVideoChatLine } from "react-icons/ri";

const BookAppointment = () => {
  return (
    <>
      <div className="rowC">
        <SideBar />
        <div className="container">
          <div className="rounded-box">
            <h1>
              This is how our{" "}
              <span style={{ color: "red" }}>appointment booking system</span>{" "}
              works.
              <br></br> 3 easy steps, so that we can help you.
            </h1>
            <br></br>
            <div className="pGrid">
              <div className="block">
                <BsCalendar3 size={"100px"} color={"red"} />
                <br></br>
                <br></br>
                <h2>#1 Give Us A Timeslot</h2>
                <p>
                  You give us a time which works best for you. That is the
                  reason you will nt have any waiting time with us and you can
                  get help instantly
                </p>
              </div>
              <div className="block">
                <BsPuzzle size={"100px"} color={"red"} />
                <br></br>
                <br></br>
                <h2>#2 Description Of Your Problem</h2>
                <p>
                  Through intelligent appointment booking system we will find
                  out, which problem you are currently facing. Thereby we can
                  preparre best for your appointment.
                </p>
              </div>
              <div className="block">
                <RiVideoChatLine size={"100px"} color={"red"} />
                <br></br>
                <br></br>
                <h2>#3 Appointment Confirmation</h2>
                <p>
                  At the end of our appointment booking system we will redirect
                  your request to our freelancers, who are the best fit to solve
                  your problem. You will receive a notification instantly if
                  your appointment is confirmend.
                </p>
              </div>
            </div>
            <div>
              <button className="book-button">Book an appointment</button>
            </div>
          </div>
          <h1 style={{ textAlign: "center", width: "75%", marginTop: "20px" }}>
            100% Trustworthy
          </h1>
          <div className="pGrid2">
            <div style={{ textAlign: "center" }}>
              <BsCheck2 size={"75px"} color={"red"} />
              <br></br>
              <h2>Selected Helper</h2>
            </div>
            <div style={{ textAlign: "center" }}>
              <BsCheck2 size={"75px"} color={"red"} />
              <br></br>
              <h2>No Waiting Time</h2>
            </div>
            <div style={{ textAlign: "center" }}>
              <BsCheck2 size={"75px"} color={"red"} />
              <br></br>
              <h2>Secure Payment</h2>
            </div>
            <div style={{ textAlign: "center" }}>
              <BsCheck2 size={"75px"} color={"red"} />
              <br></br>
              <h2>Video Conferencing</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
