import React, { useState } from "react";
import "./css/Signup.css";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { emailValidator, passwdValidator } from "../../Utils/Validate";
import { ShortError } from "../../Utils/GetShortError";

import { authenticator } from "../../firebase";

const Signup = ({ User }) => {
  const [EmailActive, setEmailActive] = useState(false);
  const [PasswdActive, setPasswdActive] = useState(false);

  const [Email, setEmail] = useState("");
  const [Passwd, setPasswd] = useState("");

  const [EmailErr, setEmailErr] = useState(null);
  const [PasswdErr, setPasswdErr] = useState(null);

  const [GAuthMsg, setGAuthMsg] = useState(null);

  const logUserIn = (e) => {
    e.preventDefault();

    if (Email && Passwd && EmailErr === null && PasswdErr === null) {
      authenticator
        .signInWithEmailAndPassword(Email, Passwd)
        .then((authUser) => {})
        .catch((err) => {
          const shortMsg = ShortError(err);

          setGAuthMsg(shortMsg);
        });
    }
  };

  const checkEmail = () => {
    const errors = emailValidator(Email);
    if (Object.keys(errors).length > 0) {
      setEmailErr(errors[Object.keys(errors)[0]]);
    } else {
      setEmailErr(null);
    }
  };

  const checkPasswd = () => {
    const errors = passwdValidator(Passwd);
    if (Object.keys(errors).length > 0) {
      setPasswdErr(errors[Object.keys(errors)[0]]);
    } else {
      setPasswdErr(null);
    }
  };

  const renderErr = (ErrorMsg) => {
    return <p className="error-message">{ErrorMsg}</p>;
  };

  const renderGAuthMsg = (Message) => {
    return <div className="google-auth-message">{Message}</div>;
  };

  const renderContent = () => {
    return (
      <div className="login_form_wrapper">
        <h1 className="login_form_header">Sign in</h1>

        {GAuthMsg ? renderGAuthMsg(GAuthMsg) : null}

        <form className="login_form">
          <div className="form_email_container">
            <input
              type="email"
              placeholder=""
              className={`form_input ${EmailErr ? "input-error" : ""} `}
              id="email"
              onFocus={() => setEmailActive(true)}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={checkEmail}
            />
            <label
              htmlFor="email"
              className={`form__label form__label--input ${
                EmailActive ? "active" : ""
              }  ${GAuthMsg ? "gauth-block-above" : ""}  `}
              onFocus={() => setEmailActive(true)}
            >
              Enter your Email
            </label>
            {EmailErr ? renderErr(EmailErr) : null}
          </div>
          <div className="form_password_container">
            <input
              type="password"
              placeholder=""
              className={`form_input  ${PasswdErr ? "input-error" : ""} `}
              onFocus={() => setPasswdActive(true)}
              onChange={(e) => setPasswd(e.target.value)}
              onBlur={checkPasswd}
            />
            <label
              htmlFor="email"
              className={`form__label form__label--password ${
                EmailErr ? "move-down" : ""
              } ${PasswdActive ? "active" : ""}  ${
                GAuthMsg ? "gauth-block-above" : ""
              }  `}
              onFocus={() => setPasswdActive(true)}
            >
              Password
            </label>
            {PasswdErr ? renderErr(PasswdErr) : null}
          </div>
          <div className="form_button_container">
            {/* <Link to="/dashboard"></Link> */}
            <input
              type="submit"
              value="Sign in"
              className="form_button"
              onClick={logUserIn}
            />
          </div>
          <div className="form_footer">
            <div className="footer_checkbox_container">
              <input
                type="checkbox"
                id="remember-me"
                className="footer_checkbox"
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className="footer_help_container">
              <span className="link">Need help?</span>
            </div>
          </div>
        </form>

        <div className="gauth_login">
          <img
            className="gauth_logo"
            src="/assets/images/google-logo.png"
            alt="Google Sign-In"
          />
          <span className="gauth_text">Login with Google</span>
        </div>
        <div className="sign_in">
          <span className="text-grey">New to Netflix?&nbsp;</span>
          <Link to="/signup">
            <span className="text-white link">Sign up now</span>
          </Link>
          .
        </div>
      </div>
    );
  };

  return User ? <Redirect to="/" /> : renderContent();
};

const mapStateToProps = (state) => {
  return { User: state.user };
};

export default connect(mapStateToProps)(Signup);
