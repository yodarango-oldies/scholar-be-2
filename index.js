const express = require("express");
const cors = require("cors");
const app = express();

const podcast = require("./data/podcast");
const blogs = require("./data/blogs");
const sermons = require("./data/sermons");
const articles = require("./data/articles");
const watch = require("./data/watch");
const books = require("./data/books");
const congregations = require("./data/congregaions");
const stories = require("./posts/stories");

const users = require("./users/users");

app.use(express.json());

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
    articles,
    watch,
    books,
    congregations,
  });
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/stories", (req, res) => {
  res.send(stories);
});

app.post("/recommend-new-resource", (req, res) => {
  res.send(req.body);
  console.log(req.body);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Running safely on port");
});
