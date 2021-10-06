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
  //userId: String, // id of the user uploading it
  title: {
    type: String, // title of the sermon
    maxLength: 60,
    trim: true,
  },
  thumbnail: String,
  preacherId: String,
  addedOnDate: String, // date uploaded
  sermonUrl: String, // file body or url
  //userAvatar: String, // avatar of the preacher
  categoryTags: [{ type: String, uppercase: true }], // categories of the sermon
  tagColors: [{ type: String, uppercase: true }], // color of backg to be applied
  //reviews:  and stars were here but have been moved to their own model due to potential size
  description: { type: String, maxLength: 500 }, // description of the message, currently not being used in the FE
});

const Sermon = mongoose.model("Sermon", sermonSchema);
const Podcast = mongoose.model("Podcast", podcastSchema);

module.exports = { dbConnection, Podcast, Sermon };
