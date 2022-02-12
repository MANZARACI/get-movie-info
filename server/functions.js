const axios = require("axios").default;
require("dotenv").config();

exports.getMovieIdByTitle = async function (title) {
  const options = {
    method: "GET",
    url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${title}`,
    headers: {
      "x-rapidapi-host":
        "imdb-internet-movie-database-unofficial.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPID_KEY,
    },
  };

  const response = await axios.request(options);

  if (response.data.titles.length === 0) {
    throw new Error("No results found");
  } else {
    return response.data.titles[0].id;
  }
};

exports.getMovieInfoById = async function (id) {
  const options = {
    method: "GET",
    url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${id}`,
    headers: {
      "x-rapidapi-host":
        "imdb-internet-movie-database-unofficial.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPID_KEY,
    },
  };

  const response = await axios.request(options);

  if (response.data.title.length === 0) {
    throw new Error("No results found");
  } else {
    return response.data;
  }
};
