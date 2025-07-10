import { useState } from "react";
const Project = ({ project, index, active }) => {
  return (
    <div className="project" key={index}>
      <div
        className="title "
        style={{ viewTransitionName: active === index ? "title" : "none" }}
      >
        {project.name}
      </div>
      <div
        className="quote "
        style={{ viewTransitionName: active === index ? "quote" : "none" }}
      >
        {project.description}
      </div>
    </div>
  );
};

// ProjectList component to load and display the list of projects
const ProjectList = () => {
  const [active, setActive] = useState(0);
  let projects = require("./projectsjson.json");

  return (
    <div
      className="project-list hideScrollbar"
      onScroll={(e) =>
        setActive(
          Math.round(
            (e.currentTarget.scrollTop + e.currentTarget.clientHeight) /
              e.currentTarget.clientHeight -
              1
          )
        )
      }
    >
      {projects.map((project, index) => (
        <Project index={index} project={project} active={active} />
      ))}
    </div>
  );
};

export default ProjectList;
