import React from "react";
import "./vision.css";
import ProjectList from "./Projects/project";

function Vision({ handleClick, style }) {
  return (
    <div
      className="vision expanded"
      onClick={() => handleClick()}
      style={style}
    >
      {/* <div className="quote">
        Figure out the REM units and make sure to use it properly.
      </div>
      <p className="title">PHOTO</p> */}

      <ProjectList />
    </div>
  );
}

export default Vision;
