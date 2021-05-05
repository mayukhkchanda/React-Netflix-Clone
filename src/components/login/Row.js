import React from "react";
import "./css/Row.css";

const Row = ({
  rowType,
  title,
  content,
  imgSrc,
  videoSrc,
  animationSrc,
  flipped,
  classType,
}) => {
  return (
    <div className={`Row ${classType}`}>
      <div className={`Row__container ${flipped ? "flipped" : ""}`}>
        <div className="Row__text">
          <h1 className="Row__text__title">{title}</h1>
          <h2 className="Row__text__subtitle">{content}</h2>
        </div>
        <div className="Row__image__container">
          <div className="Row__animation__container">
            <img
              className="Row__image"
              src={`assets/images/${imgSrc}`}
              alt="image"
            />
            <div
              className="Row__image__animation"
              style={{
                position: "relative",
                top: "10vh",
              }}
            >
              {rowType === "video" ? (
                <video
                  className={`Row__video ${classType}`}
                  autoPlay
                  playsInline
                  muted
                  loop
                >
                  <source
                    src={`assets/videos/${videoSrc}`}
                    type="video/mp4"
                  ></source>
                </video>
              ) : (
                <div className="animation">
                  <div className="animation__image_wrapper">
                    <img
                      className="animation__image"
                      src={`assets/images/${animationSrc}`}
                    />
                  </div>
                  <div className="animation__text">
                    <div className="text-0">Stranger Things</div>
                    <div className="text-1">Downloading...</div>
                  </div>
                  <div className="animation-gif"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
