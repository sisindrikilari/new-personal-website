import React from "react";
import Socials from "../components/socials";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Fidget from "../components/fidget";
import Contact from "../components/contact";
import Info from "../components/info";
import Profile from "../components/profile";
function ProjectsPage() {
  return (
    <div className="grid">
      <Navbar />
      <Profile />
      <Info />
      <Projects />
      <Socials />
      <div className="blog grid-item">blog</div>
      <Contact />
      <Fidget />
    </div>
  );
}

export default ProjectsPage;
