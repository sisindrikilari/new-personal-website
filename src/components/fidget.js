import React from "react";
import "./fidget.css";

function Fidget({ style }) {
  return (
    <div className="fidget" style={style}>
      <div className="eyes">
        <div className="eye eye-left"></div>
        <div className="eye eye-right"></div>
      </div>
    </div>
  );
}

export default Fidget;
