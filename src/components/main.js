import { React } from "react";
import { useState, useRef } from "react";
import "./main.css";
import "./projects.css";
import "./socials.css";
import "./navbar.css";
import "./fidget.css";
import "./contact.css";
import "./info.css";
// import { wrapGrid } from "animate-css-grid";

import Socials from "./socials";
import Navbar from "./navbar";
import Projects from "./projects";
import Fidget from "./fidget";
import Contact from "./contact";
import Info from "./info";
import Profile from "./profile";
import Blog from "./blog";

function Main() {
  const [isExpanded, setIsExpanded] = useState(false);
  const gridRef = useRef(null);

  const toggleFocus = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => setIsExpanded(!isExpanded));
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="grid hideScrollbar" id="grid" ref={gridRef}>
      <Navbar className={isExpanded ? " " : " "} />
      <Profile className={isExpanded ? "colEnd invisible" : ""} />
      <Info className={isExpanded ? "colEnd" : ""} />
      <Projects
        handleClick={toggleFocus}
        className={isExpanded ? "focus" : ""}
      />
      <Socials className={isExpanded ? "colEnd invisible" : ""} />
      <Blog className={isExpanded ? "rowEnd" : ""} />
      <Contact className={isExpanded ? "rowEnd" : ""} />
      <Fidget className={isExpanded ? "colEnd" : ""} />
    </div>
  );
}

export default Main;
