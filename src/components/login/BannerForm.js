import React, { useState } from "react";
import "./css/BannerForm.css";

function BannerForm() {
  const [email, setEmail] = useState("");
  const [labelUp, setLabelUp] = useState(false);
  return (
    <form action="" className="banner__form">
      <h3 className="banner__form__header">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="banner_email_wrapper">
        <div className="banner__input_wrapper">
          <input
            type="text"
            name="email"
            id="email-input"
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setLabelUp(true)}
            className="banner__input"
          />
          <p className={`email__label ${labelUp ? "slide" : ""} `}>
            Email address
          </p>
        </div>
        <div className="banner__button__wrapper">
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
        </div>
      </div>
    </form>
  );
}

export default BannerForm;
