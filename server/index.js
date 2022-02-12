const path = require("path");
const imdb = require("./functions.js");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api/id/:title", async (req, res) => {
  const { title } = req.params;

  try {
    const movieId = await imdb.getMovieIdByTitle(title);
    res.json({ imdb_id: movieId });
  } catch (error) {
    res.json({ error_message: error.message });
  }
});

app.get("/api/:id", async (req, res) => {
  const imdb_id = req.params.id;

  try {
    const info = await imdb.getMovieInfoById(imdb_id);
    res.json(info);
  } catch (error) {
    res.json({ error_message: error.message });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
