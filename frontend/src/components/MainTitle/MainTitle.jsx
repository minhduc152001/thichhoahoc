import React from "react";
import "./mainTitle.scss";

function MainTitle({ title }) {
  return (
    <div>
      <div className="main-title">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default MainTitle;
