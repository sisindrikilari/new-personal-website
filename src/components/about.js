import React, { useContext } from "react";
import "./about.css";
import { LayoutContext } from "../contexts/LayoutContext";

function About() {
  const { layout, setLayout } = useContext(LayoutContext);
  const handleClick = () => {
    if (layout === "") {
      setLayout("aboutPage");
    } else {
      setLayout("");
    }
  };
  return (
    <div className={`about ${layout}`} onClick={handleClick}>
      <p className="greeting">Hi!</p>
      <span className="message">My name is Diwash Dahal.</span>
    </div>
  );
}

export default About;
