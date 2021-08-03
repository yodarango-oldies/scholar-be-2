const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  sors({
    origin: "http://192.168.3.154",
  })
);

const podcast = require("./data/podcast");

app.get("/library", (req, res) => {
  res.json(podcast);
});

app.listen(process.env.PORT || 8081, () => {
  console.log("Running safely on port");
});
