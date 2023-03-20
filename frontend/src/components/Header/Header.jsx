import React, { useState } from "react";
import "./header.scss";
import Button from "react-bootstrap/Button";
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
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src="/logo.png"
                alt="logo"
                style={{ marginTop: "0px" }}
                width={91}
                height={68}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    <i className="fa fa-home" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/gioi-thieu"
                  >
                    giới thiệu
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/can-bang-pthh"
                  >
                    Cân bằng PTHH
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle active"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="#choose"
                  >
                    khoá học
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="/khoa-hoc?level=lop-10"
                      >
                        Lớp 10
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/khoa-hoc?level=lop-11"
                      >
                        Lớp 11
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/khoa-hoc?level=lop-12"
                      >
                        Lớp 12
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/khoa-hoc?level=on-thi-dai-hoc"
                      >
                        Ôn thi ĐH
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/phong-thi"
                  >
                    phòng thi
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="do-vui"
                  >
                    đố vui
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle active"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="#top"
                  >
                    tài liệu
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="/tai-lieu?level=lop-10"
                      >
                        Lớp 10
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/tai-lieu?level=lop-11"
                      >
                        Lớp 11
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/tai-lieu?level=lop-12"
                      >
                        Lớp 12
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/tai-lieu?level=on-thi-dai-hoc"
                      >
                        Ôn thi ĐH
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/thanh-toan"
                  >
                    thanh toán
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/huong-dan"
                  >
                    hướng dẫn
                  </a>
                </li>
              </ul>
              {!isLoggedIn && (
                <a href="/dang-nhap">
                  <button
                    id="login-button"
                    type="button"
                    className="btn btn-outline-dark log-button"
                  >
                    Đăng nhập
                  </button>
                </a>
              )}
              {!isLoggedIn && (
                <a href="/dang-ky">
                  <button
                    id="signup-button"
                    type="button"
                    className="btn btn-outline-dark log-button"
                  >
                    Đăng ký
                  </button>
                </a>
              )}
              {isLoggedIn && (
                <>
                  <a href="/dang-nhap">
                    <Button
                      onClick={handleLogout}
                      id="logout-button"
                      className="log-button"
                      variant="warning"
                    >
                      Đăng xuất
                    </Button>
                  </a>
                  <a href="/profile">
                    <div className="avatar">
                      <img src="/default_avatar.png" alt="Ảnh mặc định" />
                    </div>
                  </a>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
