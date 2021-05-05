import React from "react";
import "./css/Footer.css";
import LangSelect from "./LangSelect";

const links = [
  "FAQ",
  "Help Centre",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Corporate Information",
];

const Footer = () => {
  const renderedList = links.map((link) => {
    return (
      <li className="footer__link__item" key={link}>
        <a href="" className="footer__link">
          <span>{link}</span>
        </a>
      </li>
    );
  });

  return (
    <>
      <hr className="footer--line" />

      <div className="footer">
        <div className="footer--wrapper">
          <div className="footer--container">
            <p className="footer__title">
              Questions? Call &nbsp;
              <a href="#" className="footer__tele">
                000-800-040-4015
              </a>
            </p>
            <ul className="footer__links__list">{renderedList}</ul>
            <LangSelect></LangSelect>
            <p className="footer__title--topPadded">Netflix India</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
