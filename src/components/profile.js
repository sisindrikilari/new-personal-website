import React, { useContext } from "react";
import "./profile.css";
import { LayoutContext } from "../contexts/LayoutContext";

function Profile() {
  const { layout } = useContext(LayoutContext);
  return <div className={`profile ${layout}`}></div>;
}

export default Profile;
