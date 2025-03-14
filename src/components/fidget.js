import React from "react";
import "./fidget.css";

function Fidget({ style, className }) {
  return (
    <div className={"fidget " + className}>
      <span>
        <div className="eyes">
          <div className="eye eye-left"></div>
          <div className="eye eye-right"></div>
        </div>
      </span>
    </div>
  );
}

export default Fidget;
