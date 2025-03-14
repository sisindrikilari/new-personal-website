import React from "react";
import "./info.css";
function Info({ style, className }) {
  return (
    <div className={"info " + className}>
      <p className="greeting">Hi!</p>
      <span className="message">My name is Diwash Dahal.</span>
    </div>
  );
}

export default Info;
