import React from "react";
import ExamComponent from "../../components/Exam/Exam";
import MainContent from "../../components/MainContent/MainContent";

function Exam() {
  return (
    <div>
      <MainContent Component={ExamComponent} pageName={"phòng thi"} />
    </div>
  );
}

export default Exam;
