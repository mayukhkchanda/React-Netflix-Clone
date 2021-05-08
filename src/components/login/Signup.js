import React, { useState } from "react";
//import { Link } from "react-router-dom";
import "./css/Signup.css";
//import { signInAck } from "../../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { authenticator } from "../../firebase";

const Signup = ({ User }) => {
  const [EmailActive, setEmailActive] = useState(false);
  const [PasswdActive, setPasswdActive] = useState(false);

  const [Email, setEmail] = useState(null);
  const [Passwd, setPasswd] = useState(null);

  const signUpUser = () => {
    authenticator
      .createUserWithEmailAndPassword(Email, Passwd)
      .then((newUser) => console.log(newUser))
      .catch((err) => console.log(err));
  };

  const logUserIn = (e) => {
    e.preventDefault();

    authenticator
      .signInWithEmailAndPassword(Email, Passwd)
      .then((authUser) => {})
      .catch((err) => console.log(err));
  };

  //console.log(User);

  const renderContent = () => {
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPasswd(e.target.value)}
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
          <img className="gauth_logo" src="/assets/images/google-logo.png" />
          <span className="gauth_text">Login with Google</span>
        </div>
        <div className="sign_in">
          <span className="text-grey">New to Netflix?&nbsp;</span>
          <span className="text-white link" onClick={signUpUser}>
            Sign up now
          </span>
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
