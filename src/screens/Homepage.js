import React from "react";
import Banner from "../components/homepage/Banner";
import Nav from "../components/homepage/Nav";
import Rows from "../components/homepage/Rows";
import requests from "../requests/request";
import "./css/Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* //nav bar */}
      <Nav></Nav>

      <Banner path={requests.fetchNetflixOriginals}></Banner>

      <Rows
        urlPath={requests.fetchNetflixOriginals}
        label={"NETFLIX ORIGINALS"}
        isLargeRow
      />
      <Rows urlPath={requests.fetchTrending} label={"Trending Now"} />
      <Rows urlPath={requests.fetchTopRated} label={"Top Rated"} />
      <Rows urlPath={requests.fetchActionsMovies} label={"Action Movies"} />
      <Rows urlPath={requests.fetchComedyMovies} label={"Comedy Movies"} />
      <Rows urlPath={requests.fetchHorrorMovies} label={"Horror Movies"} />
      <Rows urlPath={requests.fetchRomanceMovies} label={"Romance Movies"} />
      <Rows urlPath={requests.fetchDocumentaries} label={"Documentaries"} />
    </div>
  );
};

export default Homepage;
