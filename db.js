const mongoose = require("mongoose");
const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://test-user:TestPass2*@cluster0.ou7d8.mongodb.net/Library?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log(`successfully connectedt to cluster`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

dbConnection();
const podcastSchema = new mongoose.Schema({
  thumbnail: { type: String, trim: true },
  userId: String,
  host: String, // name + last name is the user uploading it
  userAvatar: { type: String, trim: true },
  podcastName: { type: String, maxlength: 60, trim: true },
  // reviews and stars were moved to their own model
  description: { type: String, maxlength: 500, trim: true },
  appleLink: { type: String, maxlength: 200, trim: true },
  spotifyLink: { type: String, maxlength: 200, trim: true },
  googleLink: { type: String, maxlength: 200, trim: true },
  overcastLink: { type: String, maxlength: 200, trim: true },
});

const sermonSchema = new mongoose.Schema({
  date: Date,
  userId: String, // id of the user uploading it
  title: {
    type: String, // title of the sermon
    maxLength: 120,
    trim: true,
  },
  thumbnail: String,
  addedOnDate: String, // date uploaded
  sermonUrl: String, // file body or url
  currentRanking: Number,
  categoryTags: [{ type: String, uppercase: true }], // categories of the sermon
  tagColors: [{ type: String, uppercase: true }], // color of backg to be applied
  description: { type: String, maxLength: 500 }, // description of the message, currently not being used in the FE
});

const congregationSchema = new mongoose.Schema({
  date: Date,
  address: { type: String, lowercase: true, maxLength: 200 },
  city: { type: String, maxlength: 100 },
  state: { type: String, uppercase: true },
  fullState: { type: String, maxLength: 50 },
  zip: { type: Number, maxlength: 9 },
  country: { type: String, maxlength: 100 },
  location: String, // The location url provided by google
  logo: String,
  name: String,
  organization: { type: String, trim: true, maxLength: 200 },
  schedule: [String],
  website: { type: String, maxlength: 200, trim: true },
  iFrame: String, // the iframe link y google so i can frame it
  addedOnDate: String,
});

const bookSchema = new mongoose.Schema({
  date: Date,
  title: { type: String, maxlength: 200, trim: true },
  author: { type: String, maxlength: 200, trim: true },
  categoryTags: { type: [String], maxlength: 3, trim: true, uppercase: true },
  tagColors: { type: [String], trim: true, lowercase: true },
  description: { type: String, maxlength: 500, trim: true },
  bookUrl: { type: String, maxlength: 200, trim: true },
  currentRanking: Number,
  thumbnail: String,
  addedOnDate: String,
});

const Sermon = mongoose.model("Sermon", sermonSchema);
const Podcast = mongoose.model("Podcast", podcastSchema);
const Congregation = mongoose.model("Congregation", congregationSchema);
const Book = mongoose.model("Book", bookSchema);

module.exports = { dbConnection, Podcast, Sermon, Congregation, Book };
