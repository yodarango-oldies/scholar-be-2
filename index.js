const express = require("express");
const cors = require("cors");
const app = express();
const { dbConnection, Podcast, Sermon } = require("./db");

const podcast = require("./data/podcast");
const blogs = require("./data/blogs");
const sermons = require("./data/sermons");
const articles = require("./data/articles");
const watch = require("./data/watch");
const books = require("./data/books");
const congregations = require("./data/congregaions");
const stories = require("./posts/stories");
const commentaries = require("./posts/commentaries");
const thoughts = require("./posts/thoughts");
const user = require("./users/user");
const story = require("./posts/story");
const notifications = require("./notifications/notifications");

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

app.get("/commentaries", (req, res) => {
  res.send(commentaries);
});

app.get("/commentaries/123", (req, res) => {
  res.send(commentaries[0].comments);
});

app.get("/thoughts", (req, res) => {
  res.send(thoughts);
});

app.get("/thoughts/123", (req, res) => {
  res.send(thoughts[1].comments);
});

app.get("/users/123", (req, res) => {
  res.send(user);
});

app.get("/story", (req, res) => {
  res.send(story);
});

app.get("/my-story", (req, res) => {
  res.send(user);
});

app.get("/notifications", (req, res) => {
  res.send(notifications);
});

// app.get("/new-podcast", async (req, res) => {
//   const newPodcast = {
//     thumbnail: "String",
//     userId: "String",
//     host: "String!",
//     userAvatar: "String!",
//     podcastName: "String!",
//     description: "String!",
//     appleLink: "String!",
//     spotifyLink: "String!",
//     googleLink: "String!",
//     overcastLink: "String!",
//   };

//   try {
//     const pod = new Podcast(newPodcast);
//     await pod.save();
//     res.send("success");
//   } catch (error) {
//     console.error(error);
//   }
// });

app.get("/sermon/:id", async (req, res) => {
  try {
    console.log(req.params);
    const sermon = await Sermon.find({ userId: `${req.params.id}` });
    res.send(sermon);
  } catch (error) {}
});
app.listen(process.env.PORT || 3001, () => {
  console.log("Running safely on port");
});
