import React from "react";
import "./navbar.css";

function Navbar({ style, className }) {
  return (
    <div className={"navbar" + className}>
      <>
        <div className="name">Diwash Dahal</div>
        <div className="navs">
          <div className="curretObsession nav-item">Current Obsession</div>
          <div className="resume nav-item">Resume</div>
          <div className="getInTouch nav-item">Get In Touch</div>
        </div>
      </>
    </div>
  );
}

export default Navbar;
