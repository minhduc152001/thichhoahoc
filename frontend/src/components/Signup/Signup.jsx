import React, { useState } from "react";
import "./signup.scss";
import { provinces } from "../../constants/provinces";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

function Signup() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [address, setAddress] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdConfirm, setPwdConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const { REACT_APP_BE_HOST } = process.env;

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      if (pwd !== pwdConfirm) throw new AxiosError("Mật khẩu không khớp", 403);
      const response = await axios.post(`${REACT_APP_BE_HOST}/auth/signup`, {
        phoneNumber,
        email,
        lastName,
        firstName,
        birthYear,
        address,
        password: pwd,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.signupResult.accessToken);
        localStorage.setItem("email", response.data.signupResult._doc.email);
        toast.success("Đăng ký tài khoản thành công");
        setTimeout(() => {
          window.location.href = "/";
        }, 800);
      }
    } catch (error) {
      setLoading(false);
      const errorMessage =
        error.code === 403 ? error.message : error.response.data.error.message;
      toast.error(errorMessage);
    }
  };

  return (
    <div>
      <div className="signup-container">
        <form onSubmit={handleSignup} method="POST" id="signup-form">
          <div className="control-group">
            <label htmlFor="phone-input">
              Số điện thoại
              <span className="required-star">*</span>
            </label>
            <input
              type="text"
              id="phone-input"
              name="phone"
              placeholder="Số điện thoại"
              onChange={(e) => {
                setPhoneNumber(e.target.value.trim());
              }}
              required
            />
          </div>

          <div className="control-group">
            <label htmlFor="email-input">
              Email đăng ký
              <span className="required-star">*</span>
            </label>
            <input
              type="email"
              id="email-input"
              name="email"
              placeholder="Email đăng ký"
              onChange={(e) => {
                setEmail(e.target.value.trim());
              }}
              required
            />
          </div>

          <div className="control-group">
            <label htmlFor="last-name-input">
              Tên học sinh
              <span className="required-star">*</span>
            </label>
            <input
              type="text"
              id="last-name-input"
              name="lastname"
              placeholder="Tên học sinh"
              onChange={(e) => {
                setLastName(e.target.value.trim());
              }}
              required
            />
          </div>

          <div className="control-group">
            <label htmlFor="first-name-input">
              Họ và tên đệm
              <span className="required-star">*</span>
            </label>
            <input
              type="text"
              id="first-name-input"
              name="firstname"
              placeholder="Họ và tên đệm"
              onChange={(e) => {
                setFirstName(e.target.value.trim());
              }}
            />
          </div>

          <div className="control-group">
            <label htmlFor="birth-year-input">
              Năm sinh
              {/* <span className="required-star">*</span> */}
            </label>
            <select
              className="form-select"
              aria-label="Choose birth year"
              onChange={(e) => {
                setBirthYear(e.target.value.trim());
              }}
              defaultValue={"0"}
            >
              <option value={"0"}>-----Chọn năm sinh-----</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
            </select>
          </div>

          <div className="control-group">
            <label htmlFor="address-input">
              Địa chỉ
              {/* <span className="required-star">*</span> */}
            </label>
            <select
              className="form-select"
              aria-label="Choose birth year"
              required
              onChange={(e) => {
                setAddress(e.target.value.trim());
              }}
              defaultValue={"0"}
            >
              <option selected value={"0"}>
                -----Chọn địa chỉ-----
              </option>
              {provinces.map((province) => (
                <option value={province.codename}>{province.name}</option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label htmlFor="pwd-input">
              Mật khẩu
              <span className="required-star">*</span>
            </label>
            <input
              type="password"
              id="pwd-input"
              name="pwd"
              placeholder="Mật khẩu"
              onChange={(e) => {
                setPwd(e.target.value.trim());
              }}
              required
            />
          </div>

          <div className="control-group">
            <label htmlFor="pwd-input">
              Xác nhận mật khẩu
              <span className="required-star">*</span>
            </label>
            <input
              type="password"
              id="pwd-confirm-input"
              name="pwd-confirm"
              placeholder="Xác nhận mật khẩu"
              onChange={(e) => {
                setPwdConfirm(e.target.value.trim());
              }}
              required
            />
          </div>
          {/* {hasError && (
            <div className="error">
              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>{" "}
              {error}
            </div>
          )} */}
          <div className="controls">
            <button
              disabled={loading}
              type="submit"
              className="signup-button"
              id="submit-signup"
            >
              Đăng ký
            </button>

            <a href="/quen-mat-khau">Quên mật khẩu?</a>

            <a href="/dang-nhap">Đăng nhập</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
