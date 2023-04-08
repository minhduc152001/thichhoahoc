import React, { useState } from "react";
import "./Payment.scss";
import axios from "axios";
import { user } from "../../constants/profileUser";
import NeedLogin from "../NeedLogin/NeedLogin";

const priceIds = [
  "price_1MrexDKZ5Ry91xh9kQAwQzOH",
  "price_1MsHC4KZ5Ry91xh9PUYbGYOX",
  "price_1MsA2YKZ5Ry91xh9kmWKoVqn",
];

const plans = [
  {
    name: "Chu kì",
    values: ["Hàng tháng", "Hàng năm", "Vô thời hạn"],
  },
  {
    name: "Chi phí",
    values: ["199.000 ₫", "1.999.000 ₫", "19.990.000 ₫"],
  },
  {
    name: "Sử dụng phòng thi",
    values: ["Có", "Có", "Có"],
  },
  {
    name: "Chất lượng video bài giảng",
    values: ["Tốt", "Tốt hơn", "Tốt nhất"],
  },
  {
    name: "Độ phân giải video",
    values: ["720p", "1080p", "4K+HDR"],
  },
];

function Payment() {
  // const [bgColorForSelectedPlan, setBgColorForSelectedPlan] = useState(
  //   bgColors.blue
  // );
  const { REACT_APP_BE_HOST } = process.env;
  const [currentPlan, setCurrentPlan] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectPlan = (noPlan) => {
    setCurrentPlan(noPlan);
  };

  const handleCreateCheckout = async (priceId) => {
    setIsLoading(true);
    const { data } = await axios.post(
      `${REACT_APP_BE_HOST}/create-checkout-session`,
      {
        priceId,
        userId: user.userId,
      }
    );
    window.location.href = data.checkoutUrl;
  };

  return (
    <>
      {user.userId ? (
        <div className="payment-container">
          <div className="benefit-list">
            <h1>Chọn gói đăng ký thành viên phù hợp với bạn</h1>
            <div className="checkmark-row">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="checkmark-group--icon"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="checkmark-row--text">
                Xem mọi nội dung bạn muốn. Không có quảng cáo.
              </span>
            </div>

            <div className="checkmark-row">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="checkmark-group--icon"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                  fill="currentColor"
                ></path>
              </svg>

              <span className="checkmark-row--text">
                Đề xuất dành riêng cho bạn.{" "}
              </span>
            </div>

            <div className="checkmark-row">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="checkmark-group--icon"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                  fill="currentColor"
                ></path>
              </svg>

              <span className="checkmark-row--text">
                Thay đổi hoặc hủy gói dịch vụ của bạn bất cứ khi nào.
              </span>
            </div>

            <div className="plan-grid">
              <div className="plan-grid--header">
                <span
                  style={{
                    color: "transparent",
                    backgroundColor: "transparent",
                  }}
                >
                  tên gói
                </span>
                <span
                  style={{ cursor: "pointer" }}
                  {...(currentPlan === 1 && { className: "bg-color-selected" })}
                  onClick={() => handleSelectPlan(1)}
                >
                  Monthly
                </span>
                <span
                  style={{ cursor: "pointer" }}
                  {...(currentPlan === 2 && { className: "bg-color-selected" })}
                  onClick={() => handleSelectPlan(2)}
                >
                  Annually
                </span>
                <span
                  style={{ cursor: "pointer" }}
                  {...(currentPlan === 3 && { className: "bg-color-selected" })}
                  onClick={() => handleSelectPlan(3)}
                >
                  Unlimited
                </span>
              </div>

              <div className="plan-grid--content">
                {plans.map((plan) => (
                  <div className="plan-grid-1">
                    <span>{plan.name}</span>
                    {plan.values.map((el, i) => (
                      <span
                        {...(currentPlan === i + 1 && {
                          className: "text-color-selected",
                        })}
                      >
                        {el}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="term-payment">
              Việc bạn có thể xem ở chế độ HD (720p), Full HD (1080p), Ultra HD
              (4K) và HDR hay không phụ thuộc vào dịch vụ internet và khả năng
              của thiết bị. Không phải tất cả nội dung đều có sẵn ở mọi độ phân
              giải. Xem <a href="/term-policy">Điều khoản sử dụng</a> của chúng
              tôi để biết thêm chi tiết.
            </div>
          </div>

          <div className="submit-container">
            <button
              className="payment-button"
              disabled={isLoading}
              {...(isLoading && {
                style: { opacity: "0.5", cursor: "default" },
              })}
              onClick={() => handleCreateCheckout(priceIds[currentPlan - 1])}
            >
              {isLoading ? "Đang xử lý..." : "Thanh toán"}
            </button>
          </div>
        </div>
      ) : (
        <NeedLogin />
      )}
    </>
  );
}

export default Payment;
