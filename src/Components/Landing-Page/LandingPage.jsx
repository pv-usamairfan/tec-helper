import React from "react";
import "./LandingPage.css";
import image from "../../assets/symbol_red.png";
import Header from "../Header/Header";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div>
        <div id="pic">
          <img src={image} alt="logo" width={300}></img>
        </div>
        <h1 className="header-h1">
          technical <br></br> helpers
        </h1>
        <p id="para">
          We empower people to grow <br></br> with the digital transformation
        </p>
        <div id="box1">
          <div id="box2">
            <p id="para1">
              Any questions? Give us a call. <br></br> +44 1234567890
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
