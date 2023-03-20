import React from "react";
import "./Home.scss";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Carousel from "../../components/Carousel/Carousel";

function Home() {
  return (
    <div>
      <HomeBanner />
      <div className="main-container">
        <Carousel />

        <div className="grid-container">
          <div className="grid-row">
            <div className="grid-cell-box" style={{ marginRight: "20px" }}>
              Lớp 10
            </div>
            <div className="grid-cell-box" style={{ marginLeft: "20px" }}>
              Lớp 11
            </div>
          </div>

          <div className="grid-row">
            <div className="grid-cell-box" style={{ marginRight: "20px" }}>
              Lớp 12
            </div>
            <div className="grid-cell-box" style={{ marginLeft: "20px" }}>
              Ôn thi Đại học
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
