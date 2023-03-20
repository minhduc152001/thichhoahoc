import React from "react";
import MainContent from "../../components/MainContent/MainContent";
import Banner from "../../components/Banner/Banner";
import SignupComponent from "../../components/Signup/Signup";

function Signup() {
  return (
    <div>
      <Banner />
      <MainContent pageName={"đăng ký tài khoản"} Component={SignupComponent} />
    </div>
  );
}

export default Signup;
