import React, { useContext } from "react";
import "./contact.css";
import { FaArrowRight } from "react-icons/fa";
import { LayoutContext } from "../contexts/LayoutContext";

function Contact() {
  const { layout, setLayout } = useContext(LayoutContext);

  const handleClick = () => {
    if (layout === "") {
      setLayout("contactPage");
    } else {
      setLayout("");
    }
  };

  return (
    <div className={`contact ${layout}`} onClick={handleClick}>
      <>
        <div className="text">Contact Me</div>

        <FaArrowRight className="arrow" />
      </>
    </div>
  );
}

export default Contact;
