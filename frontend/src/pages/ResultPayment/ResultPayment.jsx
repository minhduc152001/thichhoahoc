import React, { useEffect, useState } from "react";
import "./ResultPayment.scss";
import { user, updateProfileUser } from "../../constants/profileUser";
import axios from "axios";

function ResultPayment({ status }) {
  const [updatedUser, setUpdatedUser] = useState(user);

  const fetchData = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BE_HOST}/api/user/${user.userId}`
    );
    setUpdatedUser(data.user);
    updateProfileUser({
      subscription: data.user.subscription,
      subscriptionExpiresAt: data.user.subscriptionExpiresAt,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {status === "success" ? (
        <>
          <div class="successPayment">
            <img src="./thanh-cong.png" />
            <p class="titleSuccessful">Thanh toán thành công</p>
            <p>
              Bạn đã nâng cấp tài khoản thành công, cảm ơn sự tin tưởng của bạn.
            </p>
            <p>Hãy trải nghiệm thật nhiều tính năng mất phí nhé.</p>
            <div
              class="btnBackHome"
              onClick={() => (window.location.href = "/")}
            >
              Về trang chủ
            </div>
          </div>
        </>
      ) : (
        <>
          <div class="successPayment">
            <img src="./that-bai.webp" />
            <p class="titleSuccessful" style={{ color: "#e74c3c" }}>
              Thanh toán thất bại
            </p>
            <p>Thanh toán của bạn thất bại do sự cố nào đó.</p>
            <p>Chúng tôi rất tiếc vì điều này, hãy thử lại.</p>
            <div
              class="btnBackHome"
              onClick={() => (window.location.href = "/")}
            >
              Về trang chủ
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ResultPayment;

//https://w7.pngwing.com/pngs/415/81/png-transparent-check-mark-error-s-text-photography-area.png
