import React from "react";
import Banner from "../../components/Banner/Banner";
import MainContent from "../../components/MainContent/MainContent";
import LoginComponent from "../../components/Login/Login";

function Login() {
  return (
    <div>
      <Banner />
      <MainContent pageName={"đăng nhập"} Component={LoginComponent} />
    </div>
  );
}

export default Login;
