const Project = ({ project, index }) => {
  return (
    <div className="project">
      <div className="title">{project.name}</div>
      <div className="quote">{project.description}</div>
    </div>
  );
};

// ProjectList component to load and display the list of projects
const ProjectList = () => {
  let projects = require("./projectsjson.json");
  return (
    <div className="project-list hideScrollbar">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
