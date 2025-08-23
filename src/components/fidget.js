import React, { useContext } from "react";
import "./fidget.css";
import { LayoutContext } from "../contexts/LayoutContext";

function Fidget() {
  const { layout } = useContext(LayoutContext);

  return (
    <div className={`fidget ${layout}`}>
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
