import React from "react";
import "./projects.css";
import ProjectList from "./Projects/projectlist";

function Projects({ className, style, handleClick }) {
  return (
    <div className={"projects " + className} onClick={() => handleClick()}>
      <ProjectList />
    </div>
  );
}

export default Projects;
