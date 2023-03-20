import React from "react";
import RiddleComponent from "../../components/Riddle/Riddle";
import MainContent from "../../components/MainContent/MainContent";
import Banner from "../../components/Banner/Banner";

function Riddle() {
  return (
    <div>
      <Banner />
      <MainContent Component={RiddleComponent} pageName={"đố vui hoá học"} />
    </div>
  );
}

export default Riddle;
