import React, { useState } from "react";
import "./header.scss";
// import { ParentProvider } from "../../store/Provider";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") !== null
  );
  // const useStore = useContext(ParentProvider);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <>
      <div id="header-container">
        <div className="header-logo">
          <a href="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/thesis-7edb1.appspot.com/o/images%2FScreen%20Shot%202023-02-27%20at%2017.30.39.png?alt=media&token=bed5d410-8c44-4e33-9d21-db0b978fe580"
              alt="logo"
              style={{ marginTop: "0px" }}
              width={91}
              height={68}
            />
          </a>
        </div>
        <div className="header-item" style={{ backgroundColor: "#f36223" }}>
          <a href="/">
            <i
              className="fa fa-home"
              aria-hidden="true"
              style={{ color: "white" }}
            ></i>
          </a>
        </div>
        <div className="header-item">
          <a href="/gioi-thieu">
            <span>giới thiệu</span>
          </a>
        </div>
        <div className="header-item">
          <a href="can-bang-pthh">
            <span>Cân bằng PTHH</span>
          </a>
        </div>
        <div className="header-course">
          <span>khoá học</span>
          <i className="fa fa-sort-desc" aria-hidden="true"></i>
          <div className="list-down">
            <li>
              <a href="khoa-hoc?level=lop-10">Lớp 10</a>
            </li>
            <li>
              <a href="khoa-hoc?level=lop-11">Lớp 11</a>
            </li>
            <li>
              <a href="khoa-hoc?level=lop-12">Lớp 12</a>
            </li>
            <li>
              <a href="khoa-hoc?level=on-thi-dai-hoc">Ôn thi ĐH</a>
            </li>
          </div>
        </div>
        <div className="header-item">
          <a href="phong-thi">
            <span>phòng thi</span>
          </a>
        </div>
        <div className="header-item">
          <a href="do-vui">
            <span>đố vui</span>
          </a>
        </div>
        <div className="header-course">
          <span>tài liệu</span>
          <i className="fa fa-sort-desc" aria-hidden="true"></i>
          <div className="list-down">
            <li>
              <a href="tai-lieu?level=lop-10">Lớp 10</a>
            </li>
            <li>
              <a href="tai-lieu?level=lop-11">Lớp 11</a>
            </li>
            <li>
              <a href="tai-lieu?level=lop-12">Lớp 12</a>
            </li>
            <li>
              <a href="tai-lieu?level=on-thi-dai-hoc">Ôn thi ĐH</a>
            </li>
          </div>
        </div>
        <div className="header-item">
          <a href="thanh-toan">
            <span>thanh toán</span>
          </a>
        </div>
        <div className="header-item">
          <a href="huong-dan">
            <span>hướng dẫn</span>
          </a>
        </div>
        {!isLoggedIn && (
          <a href="/dang-nhap">
            <button id="login-button" className="log-button">
              Đăng nhập
            </button>
          </a>
        )}
        {!isLoggedIn && (
          <a href="/dang-ky">
            <button id="signup-button" className="log-button">
              Đăng ký
            </button>
          </a>
        )}
        {isLoggedIn && (
          <a href="/dang-nhap">
            <button
              onClick={handleLogout}
              id="logout-button"
              className="log-button"
            >
              Đăng xuất
            </button>
          </a>
        )}
        {isLoggedIn && (
          <a href="/profile">
            <div className="avatar">
              <img src="./default_avatar.png" alt="Ảnh mặc định" />
            </div>
          </a>
        )}
      </div>
    </>
  );
}

export default Header;
