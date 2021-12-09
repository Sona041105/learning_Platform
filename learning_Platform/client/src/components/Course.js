import React from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile";
import Iframe from "react-iframe";

const Course = () => {
  return (
    <>
      <div >
        <Iframe
          scrolling="no"
          src="http://www.w3schools.com/css/default.asp"
        //   style={"border: 0px none; margin-left: -185px; height: 859px; margin-top: -533px; width: 926px;"}
        ></Iframe>
      </div>
    </>
  );
};

export default Course;
