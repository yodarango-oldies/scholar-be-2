const express = require("express");
const cors = require("cors");
const app = express();
const podcast = require("./data/podcast");
const blogs = require("./data/blogs");
const sermons = require("./data/sermons");
const notes = require("./data/notes");
const youtubeChannel = require("./data/youtubeChannels");
const books = require("./data/books");
const congregations = require("./data/congregaions");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/library", (req, res) => {
  res.json({
    podcast,
    blogs,
    sermons,
    notes,
    youtubeChannel,
    books,
    congregations,
  });
});

app.listen(process.env.PORT || 8081, () => {
  console.log("Running safely on port");
});
