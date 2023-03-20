import React from "react";
import PaymentCpn from "../../components/Payment/Payment";
import MainContent from "../../components/MainContent/MainContent";

function Payment() {
  return (
    <div>
      <MainContent
        Component={PaymentCpn}
        pageName={"đăng ký thành viên Chemx"}
      />
    </div>
  );
}

export default Payment;
