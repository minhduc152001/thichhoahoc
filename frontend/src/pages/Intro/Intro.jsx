import React from "react";
import Banner from "../../components/Banner/Banner";
import IntroComponent from "../../components/Intro/Intro";
import MainContent from "../../components/MainContent/MainContent";

function Intro() {
  return (
    <div>
      <Banner />
      <MainContent pageName={"giới thiệu"} Component={IntroComponent} />
    </div>
  );
}

export default Intro;
