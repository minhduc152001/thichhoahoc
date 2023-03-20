import React from "react";
import TestRoomComponent from "../../components/TestRoom/TestRoom";
import "./TestRoom.scss";
import Banner from "../../components/Banner/Banner";
import MainContent from "../../components/MainContent/MainContent";

function TestRoom() {
  return (
    <div>
      <Banner />
      <MainContent Component={TestRoomComponent} pageName={"phòng thi thử"} />
    </div>
  );
}

export default TestRoom;
