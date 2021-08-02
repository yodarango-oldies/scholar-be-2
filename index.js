const express = require("express");
const app = express();

const podcast = require("./data/podcast");

app.get("/library", (req, res) => {
  res.send(podcast);
});

app.listen(process.env.PORT || 8081, () => {
  console.log("Running safely on port");
});
