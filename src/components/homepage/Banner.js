import React, { useEffect, useState } from "react";
import axios from "../../apis/TmdbApi";
import "./css/Banner.css";

const Banner = ({ path }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      const data = await axios.get(path).then((res) => res.data.results);

      //console.log(data[Math.ceil(Math.random() * data.length) - 1]);
      setMovie(data[Math.ceil(Math.random() * data.length) - 1]);
    };

    getMovie();
  }, [path]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/**banner class should get the header */}
      <div className="banner-container">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">Watchlist</button>
        </div>

        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fadebottom" />
    </header>
  );
};

export default Banner;
