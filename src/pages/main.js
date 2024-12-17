import React from "react";
import { useState } from "react";
import "./main.css";
import Socials from "../components/socials";
import Navbar from "../components/navbar";
import Vision from "../components/vision";
import Fidget from "../components/fidget";
import Contact from "../components/contact";
import Info from "../components/info";
import Profile from "../components/profile";
import Blog from "../components/blog";
function Main() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFocus = () => {
    setIsExpanded(!isExpanded);
  };
  const style = {
    rowEnd: { gridRow: "8 / span 1" },
    colEnd: { gridColumn: "12 / span 1" },
    invisible: { visibility: "hidden" },
    focus: { gridRow: "2 / span 6", gridColumn: "1/ span 11" },
  };

  return (
    <div className="grid" id="grid">
      <Navbar />
      <Profile style={isExpanded ? style.invisible : {}} />
      <Info style={isExpanded ? style.colEnd : {}} />
      <Vision handleClick={toggleFocus} style={isExpanded ? style.focus : {}} />
      <Socials style={isExpanded ? style.invisible : {}} />
      <Blog style={isExpanded ? style.rowEnd : {}} />
      <Contact style={isExpanded ? style.rowEnd : {}} />
      <Fidget style={isExpanded ? style.colEnd : {}} />
    </div>
  );
}

export default Main;
