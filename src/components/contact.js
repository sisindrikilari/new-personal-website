import React from "react";
import "./contact.css";
import { FaArrowRight } from "react-icons/fa";

function Contact({ style }) {
  return (
    <div className="contact" style={style}>
      <div className="text">Contact Me</div>

      <FaArrowRight className="arrow" />
    </div>
  );
}

export default Contact;
