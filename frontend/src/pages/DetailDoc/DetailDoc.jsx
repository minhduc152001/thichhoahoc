import React from "react";
import MainContent from "../../components/MainContent/MainContent";
import DetailDocCpn from "../../components/DetailDoc/DetailDoc";
import Banner from "../../components/Banner/Banner";

function DetailDoc() {
  return (
    <div>
      <Banner />
      <MainContent
        Component={DetailDocCpn}
        pageName={
          "Chuyên đề ôn thi học sinh giỏi cấp thành phố 2023 Sở Hải Phòng"
        }
      />
    </div>
  );
}

export default DetailDoc;
