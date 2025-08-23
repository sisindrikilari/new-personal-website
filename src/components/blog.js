import { React, useContext } from "react";
import { LayoutContext } from "../contexts/LayoutContext";

function Blog() {
  const { layout, setLayout } = useContext(LayoutContext);

  const handleClick = () => {
    if (layout === "") {
      setLayout("blogPage");
    } else {
      setLayout("");
    }
  };

  return (
    <div className={`blog ${layout}`} onClick={handleClick}>
      <span>blog</span>
    </div>
  );
}

export default Blog;
