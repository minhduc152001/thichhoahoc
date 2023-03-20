import React from "react";
import MainContent from "../../components/MainContent/MainContent";
import LearnGuideCpn from "../../components/LearnGuide/LearnGuide";

function LearnGuide() {
  return (
    <div>
      <MainContent
        Component={LearnGuideCpn}
        pageName={"hướng dẫn học hoá trên chemx"}
      />
    </div>
  );
}

export default LearnGuide;
