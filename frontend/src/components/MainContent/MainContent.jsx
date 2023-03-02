import React from "react";
import TitleBox from "../TitleBox/TitleBox";
import "./mainContent.scss";
import Login from "../Login/Login";

function MainContent() {
  return (
    <div id="main-content">
      <TitleBox />
      <Login />
    </div>
  );
}

export default MainContent;
