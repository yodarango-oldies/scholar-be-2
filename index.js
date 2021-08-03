const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  sors({
    origin: "http://127.0.0.1:3000",
  })
);

const podcast = require("./data/podcast");

app.get("/library", (req, res) => {
  res.json(podcast);
});

app.listen(process.env.PORT || 8081, () => {
  console.log("Running safely on port");
});
