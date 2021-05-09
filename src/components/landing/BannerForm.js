import React, { useState } from "react";
import "./css/BannerForm.css";
import { Field, reduxForm } from "redux-form";

import { Link } from "react-router-dom";

function BannerForm(props) {
  //const [email, setEmail] = useState("");
  const [labelUp, setLabelUp] = useState(false);

  const renderInput = ({ input, label, id, className, handleFocus }) => {
    //console.log(formProps);
    return (
      <input
        {...input}
        type={label}
        name={label}
        id={id}
        className={className}
        onFocus={handleFocus}
      />
    );
  };

  const handleFocus = () => setLabelUp(true);

  //console.log(props);

  return (
    <form className="banner__form">
      <h3 className="banner__form__header">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="banner_email_wrapper">
        <div className="banner__input_wrapper">
          {/* <input
            type="email"
            name="email"
            id="email-input"
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setLabelUp(true)}
            className="banner__input"
          /> */}

          <Field
            name="email"
            component={renderInput}
            label="email"
            className="banner__input"
            id="email-input"
            handleFocus={handleFocus}
          />

          <p className={`email__label ${labelUp ? "slide" : ""} `}>
            Email address
          </p>
        </div>
        <div className="banner__button__wrapper">
          <Link to="/signup">
            <button className="banner_button">
              <span className="banner__button_text">Get Started</span>
              <svg
                className="chevron"
                viewBox="0 0 6 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>chevron</desc>
                <path
                  d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(BannerForm);
