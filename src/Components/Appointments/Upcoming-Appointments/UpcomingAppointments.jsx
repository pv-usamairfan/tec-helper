import React from "react";
import "./UpcomingAppointments.scss";
import SideBar from "../../Side-Bar/SideBar";
import { BsCheckLg } from "react-icons/bs";
import { MdOutlinePending, MdOutlineCancel } from "react-icons/md";

const UpcomingAppointments = () => {
  const tempData = [
    { date: new Date(), helper: "Klose", status: "confirmed", link: "temp" },
    { date: new Date(), helper: "Saud", status: "pending", link: "temp" },
    {
      date: new Date(),
      helper: "Muhammad Ahmad Hassan Nagra",
      status: "cancelled",
      link: "temp",
    },
  ];

  const renderConfirmationIcon = (param) => {
    switch (param.toLowerCase()) {
      case "confirmed":
        return <BsCheckLg size={"30px"} color={"green"} />;
      case "pending":
        return <MdOutlinePending size={"30px"} color={"grey"} />;
      case "cancelled":
        return <MdOutlineCancel size={"30px"} color={"red"} />;
    }
  };
  return (
    <div className="rowC">
      <SideBar />
      <div className="container">
        <div className="rounded-box">
          <div className="header-margin">
            <div className="sub-rounded-box">Past Appointments</div>
          </div>
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">Date</div>
              <div className="col col-2">Tec Helper</div>
              <div className="col col-3">Confirmation</div>
              <div className="col col-4">Video Conference</div>
            </li>
            {tempData.map((object, i) => (
              <li className="table-row" key={i}>
                <div className="col col-1" data-label="Date">
                  {object.date.toUTCString()}
                </div>
                <div className="col col-2" data-label="Tec Helper">
                  {object.helper}
                </div>
                <div className="col col-3" data-label="Rating">
                  {renderConfirmationIcon(object.status)}
                </div>
                <div className="col col-4" data-label="Rating">
                  <button className="book-button">Start Appointment</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
