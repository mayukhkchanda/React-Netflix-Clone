import React from "react";
import "./css/LangSelect.css";

function LangSelect() {
  return (
    <div className="header_lang_select">
      <div className="header_select_container">
        <div className="wrapper">
          <select className="select">
            <option>English</option>
            <option>हिन्दी</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default LangSelect;
