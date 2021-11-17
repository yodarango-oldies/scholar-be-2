//// NOde js
//require("dotenv").config();
const path = require("path");
const fs = require("fs");
const publicF = path.join(__dirname, "public/images/library/anthony-mangun");

const express = require("express");
const cors = require("cors");
const app = express();
const { dbConnection, Podcast, Sermon, Congregation, Book } = require("./db");

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
const newCongragation = require("./content/create-congregations");

//////  helpers
const myTime = require("./helpers/myTime.js");
const sermonsbyJVM = require("./mongoBckp/sermonsbyJVM");

const users = require("./users/users");
const fullTime = require("./helpers/myTime.js");
const { application } = require("express");
const { stringify } = require("querystring");

app.use(express.json({ limit: "50mb" }));
app.use(express.static("public"));
//app.use(express.urlencoded({ limit: "50mb" }));

// Set View's
app.set("views", "./views");
app.set("view engine", "ejs");
const mysql = require("mysql");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

/*app.get("/library", (req, res) => {
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
*/
// app.get("/create-congregations", (req, res) => {
//   newCongragation.map(async (congregation) => {
//     const newCong = new Congregation({
//       date: Date.now(),
//       addedOn: myTime(),
//       ...congregation,
//     });
//     console.log("done!");
//     await newCong.save();
//   });
// });
// const images = [];
// fs.readdir(publicF, (err, files) => {
//   // if (err) {
//   //   console.log(err);
//   // }
//   files.forEach((file) => {
//     images.push(file);
//   });
// });

app.get("/", async (req, res) => {
  try {
    let sermons = await Sermon.find({
      userId: "6151fe6bd3f6820eba1c8910",
    }).sort({ date: 1 });
    // sermons.forEach(async (sermon, index) => {
    //   const firsthalf = sermon.thumbnail.split("library/")[0];
    //   const secondhalf = sermon.thumbnail.split("library/")[1];
    //   const complete = `${firsthalf}library/j-vernon-mcgee/`;
    //   const join = complete + secondhalf;
    //   await Sermon.updateOne(
    //     { _id: sermon._id },
    //     { $set: { thumbnail: `${join}` } }
    //   );
    //   console.log(`${index} done`);
    // });
    // const filtered = sermons.filter(
    //   (sermon) => !sermon.thumbnail.includes("j-vernon-mcgee")
    // );
    // res.send(filtered);
    res.render("index", { sermons });
  } catch (error) {
    console.log(error);
  }
});

app.get("/tool", (req, res) => {
  res.render("tool");
});

app.post("/data", async (req, res) => {
  console.log(req.body.length);
  req.body.forEach(async (vid, index) => {
    const newSermon = new Sermon({
      date: Date.now(),
      userId: "6151fe6bd3f6820eba1c8910",
      title: vid.video.info.title
        .replace("R. C. Sproul", "")
        .replace("R C", "")
        .replace("Sproul", "")
        .replace("Rev.", "")
        .replace("Bro.", "")
        .replace(":", "-")
        .replace("Bishop", "")
        .replace("Pastor", "")
        .replace('"', ""),
      thumbnail:
        "/images/library/r-c-sproul/" +
        vid.video.info.title
          .replace(":", "-")
          .replace("R. C. Sproul", "")
          .replace("R C", "")
          .replace("Sproul", "")
          .replace("Rev.", "-")
          .replace("Bro.", "-")
          .replace(":", "-")
          .replace("Bishop", "-")
          .replace("Pastor", "-")
          .replace('"', "-")
          .replace(" ", "-")
          .replace("?", "")
          .split(" ")
          .join("-") +
        ".png",
      addedOnDate: fullTime(), // date uploaded
      sermonUrl: vid.video.link, // file body or url
      currentRanking: 0,
      categoryTags: [], // categories of the sermon
      tagColors: [], // color of backg to be applied
      description: "",
    });

    try {
      await newSermon.save();
      console.log(index);
    } catch (error) {
      console.log(error);
    }
  });
});

// app.post("/data-pl", async (req, res) => {
//   console.log(req.body.length);
//   req.body.forEach(async (vid, index) => {
//     const newSermon = new Sermon({
//       date: Date.now(),
//       userId: "61814fad7da48f62e22723b9",
//       title: vid.title
//         .replace("Kenneth Carpenter", "")
//         .replace("Carpenter", "")
//         .replace("Kenny", "")
//         .replace("Rev.", "")
//         .replace("Bro.", "")
//         .replace(":", "-")
//         .replace("-", "")
//         .replace("Bishop", "")
//         .replace("Pastor", "")
//         .replace('"', ""),
//       thumbnail:
//         "/images/library/kenneth-carpenter/" +
//         vid.title
//           .replace(":", "-")
//           .replace("Kenneth Carpenter", "")
//           .replace("Carpenter", "")
//           .replace("Kenny", "")
//           .replace("Rev.", "-")
//           .replace("Bro.", "-")
//           .replace(":", "-")
//           .replace("Bishop", "-")
//           .replace("Pastor", "-")
//           .replace('"', "-")
//           .replace("-", "")
//           .replace(" ", "-")
//           .replace("?", "")
//           .split(" ")
//           .join("-") +
//         ".png",
//       addedOnDate: fullTime(), // date uploaded
//       sermonUrl: `https://www.youtube.com/watch?v=${vid.resourceId.videoId}`, // file body or url
//       currentRanking: 0,
//       categoryTags: [], // categories of the sermon
//       tagColors: [], // color of backg to be applied
//       description: "",
//     });
//     try {
//       await newSermon.save();
//       console.log(index);
//     } catch (error) {
//       console.log(error);
//     }
//   });
// });

// ==================== INSERT BOOKS =========================== //

app.post("/books", (req, res) => {
  req.body.forEach(async (book, index) => {
    const newBook = new Book({
      date: Date.now(),
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors[0],
      categoryTags: [],
      tagColors: [],
      description: book.volumeInfo.description
        ? `${book.volumeInfo.description.substring(0, 490)}...`
        : "",
      bookUrl: book.volumeInfo.previewLink,
      currentRanking: 0,
      thumbnail: book.volumeInfo.imageLinks.thumbnail,
      addedOnDate: fullTime(),
    });

    try {
      const book = await newBook.save();
      console.log(`${index} saved sucessfully!`);
    } catch (error) {
      console.log(error);
    }
  });
});

// app.get("/books", async (req, res) => {
//   const bookss = await Book.find();
//   bookss.map(async (book) => {
//     await Book.updateOne(
//       { _id: book._id },
//       { $set: { bookUrl: book.bookUrl.split("volumes/")[0] } }
//     );
//   });
// });

// ==================== MYSQL =================
var connection = mysql.createConnection({
  host: process.env.IP, //"155.138.212.91",
  user: process.env.DBUSER, // "root",
  password: process.env.PASSWORD, //"welcome123",
  database: process.env.DB,
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("connected");
});

app.get("/test-connection", (req, res) => {
  const sql = `INSERT INTO users (MONGO_DB_ID, first_name, last_name, email, password, authority_level)
  VALUES('23432', 'dan', 'quo',  'dondo@gmla', 'e34r43bfdb', 'general');`;
  connection.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.send(result);
  });
});

console.log(process.env);
//
app.listen(process.env.PORT || 3001, () => {
  console.log("Running safely on port");
});
