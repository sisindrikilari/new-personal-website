import React from "react";
import "./contact.css";
import { FaArrowRight } from "react-icons/fa";

function Contact({ className }) {
  return (
    <div className={"contact " + className}>
      <>
        <div className="text">Contact Me</div>

        <FaArrowRight className="arrow" />
      </>
    </div>
  );
}

export default Contact;
