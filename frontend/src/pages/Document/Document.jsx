import React from "react";
import Banner from "../../components/Banner/Banner";
import MainContent from "../../components/MainContent/MainContent";
import DocumentComponent from "../../components/Document/Document";

function Document() {
  return (
    <div>
      <Banner />
      <MainContent Component={DocumentComponent} pageName={"TÀI LIỆU"} />
    </div>
  );
}

export default Document;
