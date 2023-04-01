import React, { useState } from "react";
import "./header.scss";
import Button from "react-bootstrap/Button";
import ClearIcon from "@mui/icons-material/Clear";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { updateProfileUser, user } from "../../constants/profileUser";
import axios from "axios";
import { toast } from "react-toastify";
// import { ParentProvider } from "../../store/Provider";

function Header() {
  const { REACT_APP_BE_HOST } = process.env;
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") !== null
  );
  // const useStore = useContext(ParentProvider);
  const [activeModal, setActiveModal] = useState(false);
  const [avatarImg, setAvatarImg] = useState(user.avatar);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [subscription, setSubscription] = useState(user.subscription);

  const formatDateInVN = () => {
    const date = new Date(user.subscriptionExpiresAt)
      ?.toLocaleDateString("vi-VN")
      .split("/");
    return `Kết thúc ngày ${date[0]} tháng ${date[1]} năm ${date[2]}`;
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  const updateProfile = async () => {
    toast.success("Cập nhật tài khoản thành công");
    await axios.put(`${REACT_APP_BE_HOST}/api/user/${user.userId}`, {
      firstName,
      lastName,
      avatar: avatarImg,
      subscription,
    });
    updateProfileUser({ firstName, lastName, avatar: avatarImg });
  };

  const handleShowModal = () => {
    setActiveModal(true);
  };

  const handleHideModal = () => {
    setActiveModal(false);
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
                  <div onClick={handleShowModal}>
                    <div className="avatar">
                      <img src={user.avatar} alt="Ảnh" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
      {activeModal && (
        <div className="container-profile-setting">
          <div className="profile-container">
            <div className="profile-header">
              <div class="profile-header">
                <span>Thông tin tài khoản</span>
                <div onClick={handleHideModal} style={{ cursor: "pointer" }}>
                  <ClearIcon />
                </div>
              </div>
            </div>
            <div className="profile-setting">
              <div className="profile-setting-item">
                <div className="profile-element">
                  <img src={avatarImg} alt="Avatar" className="profile-avtar" />
                  <div className="email">
                    <div className="title-element">Email</div>
                    <div className="main-content-element">{user.email}</div>
                  </div>
                </div>
              </div>

              <div
                className="profile-setting-item"
                style={{ paddingTop: "22px" }}
              >
                <div className="profile-input-element">
                  <div className="input-box">
                    <div
                      className="title-element"
                      style={{ marginBottom: "8px" }}
                    >
                      Tên
                    </div>
                    <input
                      type="text"
                      defaultValue={lastName}
                      style={{
                        height: "40px",
                        padding: "10px",
                        marginBottom: "6px",
                        borderRadius: "7px",
                        border: "1px solid #b1b1b1",
                      }}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div
                    className="btn-save-changes"
                    {...(lastName === user.lastName && {
                      style: { opacity: 0.3, cursor: "default" },
                    })}
                    onClick={updateProfile}
                  >
                    Lưu thay đổi
                  </div>
                </div>
              </div>

              <div
                className="profile-setting-item"
                style={{ paddingTop: "22px" }}
              >
                <div className="profile-input-element">
                  <div className="input-box">
                    <div
                      className="title-element"
                      style={{ marginBottom: "12px", marginTop: "26px" }}
                    >
                      Họ & tên đệm
                    </div>
                    <input
                      type="text"
                      defaultValue={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      style={{
                        height: "40px",
                        padding: "10px",
                        marginBottom: "6px",
                        borderRadius: "7px",
                        border: "1px solid #b1b1b1",
                      }}
                    />
                  </div>
                  <div
                    className="btn-save-changes"
                    style={{ marginTop: "46px" }}
                    {...(firstName === user.firstName && {
                      style: { opacity: 0.3, cursor: "default" },
                    })}
                    onClick={updateProfile}
                  >
                    Lưu thay đổi
                  </div>
                </div>
              </div>

              <div
                className="profile-setting-item"
                style={{ paddingTop: "22px" }}
              >
                <div className="profile-input-element">
                  <div className="input-box">
                    <div
                      className="title-element"
                      style={{ marginBottom: "11px", marginTop: "59px" }}
                    >
                      Loại thành viên
                    </div>
                    <div
                      className="profile-subscription"
                      {...(user.subscription !== "NORMAL" && {
                        style: { color: "#f36223" },
                      })}
                    >
                      {user.subscription}
                    </div>
                  </div>
                  <div
                    className="btn-save-changes"
                    style={{ marginTop: "82px" }}
                  >
                    {user.subscription === "UNLIMITED" ? "" : "Nâng cấp"}
                  </div>
                </div>
              </div>

              <div
                className="profile-setting-item"
                style={{ paddingTop: "22px" }}
              >
                <div className="profile-input-element">
                  <div className="input-box">
                    <div
                      className="title-element"
                      style={{ marginBottom: "8px", marginTop: "68px" }}
                    >
                      Thời gian hết hạn
                    </div>
                    <div className="profile-subscription-expire">
                      {formatDateInVN()}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="profile-setting-item"
                style={{ paddingTop: "22px" }}
              >
                <div
                  className="profile-input-element"
                  style={{ border: "none" }}
                >
                  <div className="input-box">
                    <div
                      className="title-element"
                      style={{ marginBottom: "8px", marginTop: "73px" }}
                    >
                      Tài khoản
                    </div>
                    <div className="btn-profile-signout">
                      <ExitToAppIcon color="error" />
                      <div
                        onClick={handleLogout}
                        className="signout-txt"
                        style={{ color: "#d32f2f" }}
                      >
                        Đăng xuất
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
