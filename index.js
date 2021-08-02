const express = require("express");
const app = express();

//const podcast = require("./data/podcast");
app.get("/library", (req, res) => {
  res.send([
    {
      photo: "",
      name: "Podcast One",
      host: "John Doe",
      reviews: ["1", "2", "3", "4", "5"], //total possible stars:  5 x  5 = 25
      stars: [1, 1, 3, 4.5, 3.5], //total stars: 25 (^^^) / 1.5 + 4 + 5 + 4.5 + 3.5 = .74 x 10 = 7.4 / 2 = 3.7 stars
      description:
        "ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ips",
      links: {
        apple: "https://www.apple.com/apple-podcasts/",
        spotify: "https://www.spotify.com/us/",
        google: "https://podcasts.google.com/",
        overcast: "https://overcast.fm/",
      },
    },
    {
      photo: "",
      name: "Podcast One",
      host: "John Doe",
      reviews: ["1", "2", "3", "4", "5"], //total possible stars:  5 x  5 = 25
      stars: [1, 4.5, 5, 5, 5], //total stars: 25 (^^^) / 1.5 + 4 + 5 + 4.5 + 3.5 = .74 x 10 = 7.4 / 2 = 3.7 stars
      description:
        "ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ips",
      links: {
        apple: "https://www.apple.com/apple-podcasts/",
        spotify: "https://www.spotify.com/us/",
        google: "https://podcasts.google.com/",
        overcast: "https://overcast.fm/",
      },
    },
    {
      photo: "",
      name: "Podcast One",
      host: "John Doe",
      reviews: ["1", "2", "3"], //total possible stars:  5 x  5 = 25
      stars: [1.5, 3, 3], //total stars: 25 (^^^) / 1.5 + 4 + 5 + 4.5 + 3.5 = .74 x 10 = 7.4 / 2 = 3.7 stars
      description:
        "ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ips",
      links: {
        apple: "https://www.apple.com/apple-podcasts/",
        spotify: "https://www.spotify.com/us/",
        google: "https://podcasts.google.com/",
        overcast: "https://overcast.fm/",
      },
    },
    {
      photo: "",
      name: "Podcast One",
      host: "John Doe",
      reviews: ["1", "2", "3"], //total possible stars:  5 x  5 = 25
      stars: [5, 5, 5], //total stars: 25 (^^^) / 1.5 + 4 + 5 + 4.5 + 3.5 = .74 x 10 = 7.4 / 2 = 3.7 stars
      description:
        "ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ips",
      links: {
        apple: "https://www.apple.com/apple-podcasts/",
        spotify: "https://www.spotify.com/us/",
        google: "https://podcasts.google.com/",
        overcast: "https://overcast.fm/",
      },
    },
    {
      photo: "",
      name: "Podcast One",
      host: "John Doe",
      reviews: ["1", "2", "3"], //total possible stars:  5 x  5 = 25
      stars: [1.5, 3, 3], //total stars: 25 (^^^) / 1.5 + 4 + 5 + 4.5 + 3.5 = .74 x 10 = 7.4 / 2 = 3.7 stars
      description:
        "ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ips",
      links: {
        apple: "https://www.apple.com/apple-podcasts/",
        spotify: "https://www.spotify.com/us/",
        google: "https://podcasts.google.com/",
        overcast: "https://overcast.fm/",
      },
    },
    {
      photo: "",
      name: "Podcast One",
      host: "John Doe",
      reviews: ["1", "2", "3", "4"], //total possible stars:  5 x  5 = 25
      stars: [0, 0, 0], //total stars: 25 (^^^) / 1.5 + 4 + 5 + 4.5 + 3.5 = .74 x 10 = 7.4 / 2 = 3.7 stars
      description:
        "ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ips",
      links: {
        apple: "https://www.apple.com/apple-podcasts/",
        spotify: "https://www.spotify.com/us/",
        google: "https://podcasts.google.com/",
        overcast: "https://overcast.fm/",
      },
    },
    {
      photo: "",
      name: "Podcast One",
      host: "John Doe",
      reviews: ["1", "2", "3", "1", "2", "3"], //total possible stars:  5 x  5 = 25
      stars: [1.5, 3, 3], //total stars: 25 (^^^) / 1.5 + 4 + 5 + 4.5 + 3.5 = .74 x 10 = 7.4 / 2 = 3.7 stars
      description:
        "ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ips",
      links: {
        apple: "https://www.apple.com/apple-podcasts/",
        spotify: "https://www.spotify.com/us/",
        google: "https://podcasts.google.com/",
        overcast: "https://overcast.fm/",
      },
    },
  ]);
});

app.listen(process.env.PORT || 8081, () => {
  console.log("Running safely on port");
});
