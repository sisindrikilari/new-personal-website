import React from "react";

import { LayoutProvider } from "../contexts/LayoutContext";
import "./main.css";
import HomeLayout from "../Skeleton/Skeleton";
import "../layoutPages/projectPage.css";
import "../layoutPages/blogPage.css";
import "../layoutPages/contactPage.css";
import "../layoutPages/aboutPage.css";

function Main() {
  return (
    <div className="hideScrollbar" id="grid">
      <LayoutProvider>
        <HomeLayout />
      </LayoutProvider>
    </div>
  );
}

export default Main;
