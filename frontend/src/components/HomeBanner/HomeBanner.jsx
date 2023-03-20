import React from "react";
import "./HomeBanner.scss";

function HomeBanner() {
  return (
    <div>
      <div className="home-banner">
        <div className="main-home-banner">
          <div className="banner-text">
            "You mix a bunch of ingredients, and once in a great while,
            chemistry happens and one thing that you can't fake is chemistry..."
            - Bill Watterson
            <a
              href="https://www.youtube.com/watch?v=P3RXtoYCW4M"
              target="_blank"
            >
              <img src="./btn-youtube.png" alt="Xem youtube" />
            </a>
          </div>
        </div>

        <div className="welcome-area">
          <img src="./cu-an-mung.gif" alt="Welcome to ChemX.vn" />
          <button className="welcome-box">Chào mừng đến với ChemX</button>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
