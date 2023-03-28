import React from "react";
import "./NotFound.scss";

function NotFound() {
  return (
    <div>
      <div className="notfound-container">
        <h1>Không tìm thấy trang này</h1>
        <img src="./not-found.png" alt="Khong tim thay" />
        <p>Trang này không có sẵn. Mong bạn thông cảm.</p>
      </div>
    </div>
  );
}

export default NotFound;
