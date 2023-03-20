import React from "react";
import TitleBox from "../TitleBox/TitleBox";
import "./mainContent.scss";

function MainContent({ pageName, Component }) {
  return (
    <div className="container-sm" style={{marginTop: "30px"}}>
      {/* <div id="main-content"> */}
        <TitleBox pageName={pageName} />
        {<Component />}
      {/* </div> */}
    </div>
  );
}

export default MainContent;
