import React, { useState } from "react";
import BannerForm from "./BannerForm";
import "./css/Banner.css";

function Banner() {
  /* const [email, setEmail] = useState("");
  const [labelUp, setLabelUp] = useState(false); */

  return (
    <>
      <div className="banner">
        <div className="banner__background">
          <img
            className="banner__image"
            src="assets/images/banner.jpg"
            alt="Netflix-banner"
          />
          <div className="banner__fade"></div>
        </div>
        <div className="banner__text">
          <div className="banner_title">
            <h1>Unlimited movies, TV shows and more.</h1>
          </div>
          <div className="banner_sub-title">
            <h2>Watch anywhere. Cancel anytime.</h2>
          </div>

          <BannerForm></BannerForm>
        </div>
      </div>
    </>
  );
}

export default Banner;
