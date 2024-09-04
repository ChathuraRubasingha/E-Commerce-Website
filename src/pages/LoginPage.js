import React, { useState } from "react";
import "./LoginPage.css";
import Logo from "../assets/images/logo.png";
import CoverImg from "../assets/images/coverImg.png";
import axios from "axios";

function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const data = {
        email: user,
        password: password,
      };
      const res = await axios.post("http://localhost:8080/login", data);
      if (res.status === 200) {
        localStorage.setItem("token", res.data);
        alert("Login Success");
        window.location.href = "/home";
      }
    } catch (err) {
      console.log(err);
      alert("Login Fail");
    }
  };
  return (
    <div className="login-page">
      <div className="left-side">
        <div className="hero-section">
          <div className="logo">
            <img src={Logo} />
          </div>
          <div className="hero-header">Welcome</div>
          <div className="sub-heading">Login with Email</div>
          <div className="login-form">
            <label>Email</label>
            <input
              type="text"
              name="username"
              onChange={(e) => setUser(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => password(e.target.value)}
            />
            <div className="submit-buttons">
              <button
                className="login-button"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Sign In
              </button>
              <button className="login-button">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side"></div>
    </div>
  );
}

export default LoginPage;
