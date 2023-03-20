import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div id="footer">
      <div id="footer-logo">
        <img src="/footer_top_bg.png" alt="" />
      </div>
      <div id="footer-header"></div>
      <div id="footer-content">
        <div className="container">
          <div className="pure-group">
            <div className="group group-1">
              <ul>
                <li>
                  <b>HỖ TRỢ</b>
                </li>
                <li>
                  <a href="/">Câu hỏi thường gặp</a>
                </li>
                <li>
                  <a href="/">Hướng dẫn sử dụng</a>
                </li>
                <li>
                  <a href="/">Hướng dẫn thanh toán</a>
                </li>
                <li>
                  <a href="/">Phản hồi PHHS</a>
                </li>
              </ul>
            </div>
            <div className="group group-2">
              <ul>
                <li>
                  <b>HƯỚNG DẪN</b>
                </li>
                <li>
                  <a href="/">Chính sách</a>
                </li>
                <li>
                  <a href="/">Nhóm học tập</a>
                </li>
                <li>
                  <a href="/">Người sáng lập</a>
                </li>
                <li>
                  <a href="/">Thành tích học sinh</a>
                </li>
              </ul>
            </div>
            <div className="group group-3">
              <ul>
                <li>
                  <b>LIÊN HỆ</b>
                </li>
                <li>
                  Email: <a href="emailto:chemx@gmail.com">chemx@gmail.com</a>
                </li>
                <li>
                  Facebook: <a href="/">fb.co/chemx.fly.dev</a>
                </li>
                <li>
                  Youtube: <a href="/">ChemX Channel</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copy-right">
            Copyright © ChemX 2023
            <br></br>
            Sản phầm thuộc sở hữu thuộc về Vũ Minh Đức
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
