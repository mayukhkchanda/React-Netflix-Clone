import axios from "axios";

const apiKey = process.env.REACT_APP_TMDB_APIKEY;

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: apiKey,
  },
});

export default tmdb;
