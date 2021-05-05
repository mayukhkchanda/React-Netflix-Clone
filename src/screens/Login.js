import React from "react";
import Navbar from "../components/login/Navbar";
import Banner from "../components/login/Banner";
import Row from "../components/login/Row";
import Accordion from "../components/login/Accordion";
import Footer from "../components/login/Footer";
import "./css/Login.css";

import RowData from "../fixtures/RowData.json";

const Homepage = () => {
  return (
    <>
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

      {/**Footer links */}
      <Footer></Footer>
    </>
  );
};

export default Homepage;
