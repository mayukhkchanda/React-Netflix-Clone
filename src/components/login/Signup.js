import React, { useState } from "react";
import "./css/Signup.css";

function Signup() {
  const [EmailActive, setEmailActive] = useState(false);
  const [PasswdActive, setPasswdActive] = useState(false);

  return (
    <div className="login_form_wrapper">
      <h1 className="login_form_header">Sign in</h1>
      <form className="login_form">
        <div className="form_email_container">
          <input
            type="email"
            placeholder=""
            className="form_input"
            id="email"
            onFocus={() => setEmailActive(true)}
          />
          <label
            htmlFor="email"
            className={`form__label form__label--input ${
              EmailActive ? "active" : ""
            }`}
            onFocus={() => setEmailActive(true)}
          >
            Enter your Email
          </label>
        </div>
        <div className="form_password_container">
          <input
            type="password"
            placeholder=""
            className="form_input"
            onFocus={() => setPasswdActive(true)}
          />
          <label
            htmlFor="email"
            className={`form__label form__label--password ${
              PasswdActive ? "active" : ""
            }`}
            onFocus={() => setPasswdActive(true)}
          >
            Password
          </label>
        </div>
        <div className="form_button_container">
          <input type="submit" value="Sign in" className="form_button" />
        </div>
        <div className="form_footer">
          <div className="footer_checkbox_container">
            <input
              type="checkbox"
              id="remember-me"
              className="footer_checkbox"
            />
            <label for="remember-me">Remember me</label>
          </div>
          <div className="footer_help_container">
            <span className="link">Need help?</span>
          </div>
        </div>
      </form>

      <div className="gauth_login">
        <img className="gauth_logo" src="/assets/images/google-logo.png" />
        <span className="gauth_text">Login with Google</span>
      </div>
      <div className="sign_in">
        <span className="text-grey">New to Netflix?&nbsp;</span>
        <span className="text-white link">Sign up now</span>.
      </div>
    </div>
  );
}

export default Signup;
