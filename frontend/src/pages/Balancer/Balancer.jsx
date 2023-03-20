import React from "react";
import Banner from "../../components/Banner/Banner";
import BalancerComponent from "../../components/Balancer/Balancer";
import MainContent from "../../components/MainContent/MainContent";

function Balancer() {
  return (
    <div>
      <Banner />
      <MainContent
        pageName={"cân bằng phương trình hoá học"}
        Component={BalancerComponent}
      />
      {/* <MainTitle title={"chức năng tự động cân bằng phương trình hoá học"} /> */}
    </div>
  );
}

export default Balancer;
