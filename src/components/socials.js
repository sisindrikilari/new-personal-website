import React from "react";
import "./socials.css";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Socials({ className }) {
  return (
    <div className={"socials " + className}>
      {/* <figure>
        <div class="container">
          <div class="cube po-tm">
            <div class="face front">1</div>

            <div class="face right">3</div>
            <div class="face left">4</div>

            <div class="face bottom">6</div>
          </div>
        </div>
      </figure> */}
      <a
        href="https://x.com/DiwashD35362033"
        target="_blank"
        rel="noopener noreferrer"
        className="twitter social-item"
      >
        <FaTwitter className="icon" />
      </a>
      <a
        href="https://www.instagram.com/d_boss_101_/"
        target="_blank"
        rel="noopener noreferrer"
        className="insta social-item"
      >
        <FaInstagram className="icon" />
      </a>

      <a
        href="https://github.com/Diwash-101"
        target="_blank"
        rel="noopener noreferrer"
        className="github social-item"
      >
        <FaGithub className="icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/diwash-dahal-0b1708253/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin social-item"
      >
        <FaLinkedin className="icon" />
      </a>
    </div>
  );
}

export default Socials;
