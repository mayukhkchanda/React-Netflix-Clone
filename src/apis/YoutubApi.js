import axios from "axios";

const KEY = process.env.REACT_APP_YT_KEY;

const YoutubeApi = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    channelType: "any",
    type: "video",
    key: KEY,
    regionCode: "us",
  },
});

export default YoutubeApi;
