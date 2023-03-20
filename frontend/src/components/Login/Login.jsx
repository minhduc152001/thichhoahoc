import React, { useState } from "react";
import "./login.scss";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");

  const { REACT_APP_BE_HOST } = process.env;

  const ignoreError = () => {
    setHasError(false);
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${REACT_APP_BE_HOST}/auth/login`, {
        email,
        password,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.loginResult.accessToken);
        localStorage.setItem("email", response.data.loginResult.profile.email);
        window.location.href = "/";
      }
    } catch (error) {
      const { data } = error.response;
      // if (status === 400)
      setHasError(true);
      setError(data.error.message);
    }
  };

  return (
    <div className="login-container">
      <form action="/" onSubmit={handleLogin} method="POST" id="login-form">
        <div className="control-group">
          <label htmlFor="email-input">
            Email
            <span className="required-star">*</span>
          </label>
          <input
            type="email"
            id="email-input"
            name="email"
            placeholder="Email đăng nhập"
            onChange={(e) => {
              setEmail(e.target.value.trim());
              ignoreError();
            }}
            required
          />
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
              setPassword(e.target.value.trim());
              ignoreError();
            }}
            required
          />
        </div>
        {hasError && (
          <div className="error">
            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>{" "}
            {error}
          </div>
        )}
        <div className="controls">
          <button type="submit" className="login-button" id="submit-login">
            Đăng nhập
          </button>

          <a href="/quen-mat-khau">Quên mật khẩu?</a>

          <a href="/dang-ky">Đăng ký tài khoản</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
