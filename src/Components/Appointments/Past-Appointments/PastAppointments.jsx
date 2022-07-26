import React from "react";
import "./PastAppointments.scss";
import SideBar from "../../Side-Bar/SideBar";
import ReactStars from "react-rating-stars-component";

const PastAppointments = () => {
  const tempData = [
    { date: new Date(), helper: "Klose", rating: 3.5 },
    { date: new Date(), helper: "Saud", rating: 1.5 },
    { date: new Date(), helper: "Muhammad Ahmad Hassan Nagra", rating: 0.5 },
  ];
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
              <div className="col col-3">Rating</div>
            </li>
            {tempData.map((object, i) => (
              <li className="table-row" key={i}>
                <div className="col col-1" data-label="Date">
                  {object.date.toUTCString()}
                </div>
                <div className="col col-2" data-label="Tec Helper">
                  {object.helper}
                </div>
                <div
                  className="col col-3"
                  data-label="Rating"
                  style={{ marginLeft: "15%" }}
                >
                  <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    isHalf={true}
                    value={object.rating}
                    activeColor="#ffd700"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PastAppointments;
