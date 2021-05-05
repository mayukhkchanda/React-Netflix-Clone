import React from "react";
import Navbar from "../components/landing/Navbar";
import Banner from "../components/landing/Banner";
import Row from "../components/landing/Row";
import Accordion from "../components/landing/Accordion";
import Footer from "../components/landing/Footer";
import "./css/Landing.css";

import RowData from "../fixtures/RowData.json";

const Homepage = () => {
  return (
    <div className="landing">
      <Navbar></Navbar>
      <Banner></Banner>
      <Row
        rowType="video"
        title={RowData[0].title}
        content={RowData[0].content}
        imgSrc={RowData[0].imgSrc}
        videoSrc={RowData[0].vidSrc}
        flipped={false}
        classType={RowData[0].classType}
      ></Row>
      <Row
        rowType="animation"
        title={RowData[1].title}
        content={RowData[1].content}
        imgSrc={RowData[1].imgSrc}
        animationSrc={RowData[1].animationSrc}
        flipped={true}
        classType={RowData[1].classType}
      ></Row>
      <Row
        rowType="video"
        title={RowData[2].title}
        content={RowData[2].content}
        imgSrc={RowData[2].imgSrc}
        videoSrc={RowData[2].vidSrc}
        flipped={false}
        classType={RowData[2].classType}
      ></Row>

      <Accordion></Accordion>

      <Footer></Footer>
    </div>
  );
};

export default Homepage;
