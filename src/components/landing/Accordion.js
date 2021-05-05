import React, { Component } from "react";
import faqs from "../../fixtures/faqs.json";
import BannerForm from "./BannerForm";
import "./css/Accordion.css";

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = { faqsList: [], selectedFaq: null };
  }

  componentDidMount() {
    this.setState({ faqsList: faqs });
  }

  handleClick(id) {
    if (this.state.selectedFaq === id) {
      this.setState({ selectedFaq: null });
    } else {
      this.setState({ selectedFaq: id });
    }
  }

  renderList = () => {
    const list = this.state.faqsList.map((faq) => {
      return (
        <li className="Accordion__list__item" key={faq.id}>
          <button
            onClick={() => this.handleClick(faq.id)}
            className="Accordion__Ques"
          >
            {faq.header}
            <svg
              id="thin-x"
              viewBox="0 0 26 26"
              className={`svg-icon ${
                this.state.selectedFaq === faq.id ? "open" : ""
              }`}
              focusable="true"
            >
              <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
            </svg>
          </button>
          <div
            className={`Accordion__Ans ${
              this.state.selectedFaq === faq.id ? "open" : "closed"
            } `}
          >
            <span>{faq.body}</span>
          </div>
        </li>
      );
    });
    return list;
  };

  render() {
    // console.log(this.state.faqsList);
    return (
      <div className="faq__wrapper">
        <div className="Accordion">
          <div className="Accordion--wrapper">
            <h1 className="Accordion__title">Frequently Asked Questions</h1>
            <ul className="Accordion__List">{this.renderList()}</ul>
          </div>
          <BannerForm></BannerForm>
        </div>
      </div>
    );
  }
}

export default Accordion;
