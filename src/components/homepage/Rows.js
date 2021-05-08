import React, { useEffect, useState } from "react";
import axios from "../../apis/TmdbApi";
import "./css/Row.css";
import Youtube from "react-youtube";
//import trailer from "movie-trailer";
import YoutubeApi from "../../apis/YoutubApi";

const Rows = ({ urlPath, label, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  const [trailerUrl, setTrailerUrl] = useState("");

  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const data = await axios
        .get(urlPath)
        .then((res) => res.data.results)
        .catch((err) => console.log(err));
      //console.log(data);
      setMovies(data);
    };
    getMovies();
  }, [urlPath]);

  const onPosterClick = (movie) => {
    //console.log(movie);

    if (nowPlaying === movie?.id) {
      setTrailerUrl("");
      setNowPlaying(null);
    } else {
      let searchTerm = movie?.name || movie?.title || movie?.original_title;
      searchTerm += " trailer";

      YoutubeApi.get("/search", {
        params: {
          q: searchTerm,
          maxResults: 5,
        },
      })
        .then((res) => res.data.items)
        .then((data) => {
          //console.log(data);
          setTrailerUrl(data[0].id.videoId);
          setNowPlaying(movie?.id);
        })
        .catch((err) => console.log(err));
    }
  };

  const renderedList = movies
    .filter((movie) => {
      return !isLargeRow ? movie.backdrop_path : movie.poster_path;
    })
    .map((movie) => {
      return (
        <img
          key={movie.id}
          onClick={() => onPosterClick(movie)}
          className={`image ${isLargeRow ? "enlarge" : ""}`}
          src={`http://image.tmdb.org/t/p/original${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={`${movie.name}`}
        />
      );
    });

  const options = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="rows">
      <div className="row">
        <div className="header">
          <h2>{label}</h2>
        </div>

        <div className="image-container">{renderedList}</div>

        {trailerUrl ? (
          <div className="row__youtube">
            {" "}
            <Youtube videoId={trailerUrl} opts={options} />{" "}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Rows;
