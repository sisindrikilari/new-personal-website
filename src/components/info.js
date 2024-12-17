import React from "react";
import "./info.css";
function Info({ style }) {
  return (
    <div className="info" style={style}>
      <p className="greeting">Hi</p>
      <p>My name is Diwash Dahal.</p>
      <p>I'm a software developer based in DC.</p>
      <p>
        My goal is to encourage myself and people to create more and consume
        less.
      </p>
      <p>
        I want people to realize that personal tech is actually tool if used
        properly.
      </p>
    </div>
  );
}

export default Info;
