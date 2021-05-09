import React from "react";
import "./css/Footer.css";
import LangSelect from "./LangSelect";

const links = [
  "FAQ",
  "Help Centre",
  "Account",
  "Media Centre",
  "Investor Relations",
  "Jobs",
  "Ways to Watch",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Corporate Information",
  "Contact Us",
  "Speed Test",
  "Legal Notices",
  "Netflix Originals",
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
    <div className="footer">
      <div className="footer--warpper">
        <div className="footer--container">
          <p className="footer__title">
            Questions? Call &nbsp;
            <a href="" className="footer__tele">
              000-800-040-4015
            </a>
          </p>
          <ul className="footer__links__list">{renderedList}</ul>
          <LangSelect></LangSelect>
          <p className="footer__title--topPadded">Netflix India</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
