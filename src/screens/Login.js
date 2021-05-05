import React from "react";
import Footer from "../components/Login/Footer";
import Navbar from "../components/Login/Navbar";
import Signup from "../components/Login/Signup";
import "./css/Login.css";

const Login = () => {
  return (
    <>
      <div className="login_background">
        <img
          className="login_background_image"
          src="/assets/images/background.jpg"
          alt="background"
        />
        <div className="login_background_gradient"></div>
      </div>
      <div className="login">
        <Navbar></Navbar>
        <Signup></Signup>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Login;
