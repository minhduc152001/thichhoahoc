import React from "react";
import "./titleBox.scss";

function TitleBox({ pageName }) {
  return (
    <div id="title-box">
      <span className="title web-name">CHEMX</span>
      <span className="title page-name">{pageName}</span>
      <img src="/box_title_bg.png" alt="" />
    </div>
  );
}

export default TitleBox;
