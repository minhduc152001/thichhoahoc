import React from "react";
import RiddleAnswerComponent from "../../components/RiddleAnswer/RiddleAnswer";
import MainContent from "../../components/MainContent/MainContent";

function RiddleAnswer() {
  return (
    <div>
      <MainContent
        Component={RiddleAnswerComponent}
        pageName={"câu hỏi đố vui"}
      />
    </div>
  );
}

export default RiddleAnswer;
