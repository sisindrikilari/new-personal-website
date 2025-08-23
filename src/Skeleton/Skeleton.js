import "./skeleton.css";
import Socials from "../components/socials";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Fidget from "../components/fidget";
import Contact from "../components/contact";
import About from "../components/about";
import Profile from "../components/profile";
import Blog from "../components/blog";

function HomeLayout() {
  return (
    <div className="grid">
      <Navbar />
      <Profile />
      <About />
      <Projects />
      <Socials />
      <Blog />
      <Contact />
      <Fidget />
    </div>
  );
}

export default HomeLayout;
