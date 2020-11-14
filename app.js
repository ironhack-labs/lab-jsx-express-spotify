require("dotenv").config();

const express = require("express");
const erv = require("express-react-views");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
const PORT = 4000;

// SET THE VIEW ENGINE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", erv.createEngine());

// MIDDLEWARE:
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("tiny"));

// setting the spotify-api goes here:
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

// Retrieve an access token
spotifyApi
  .clientCredentialsGrant()
  .then((data) => spotifyApi.setAccessToken(data.body["access_token"]))
  .catch((error) =>
    console.log(
      "Something went wrong when retrieving an access token steven",
      error
    )
  );

// Our routes go here:
// ROUTES

app.get("/", (req, res, next) => {
  res.render("Home");
});

app.get("/artist-search", (req, res, next) => {
  console.log(req.query.search);
  spotifyApi
    .searchArtists(req.query.search)
    .then((data) => {
      const props = data.body;
      res.render("ArtistSearchResult", props);
    })
    .catch((err) =>
      console.log("The error while searching artists occurred: ", err)
    );
});

app.get("/albums/:artistId", (req, res, next) => {
  spotifyApi
    .getArtistAlbums(req.params.artistId)
    .then((data) => {
      const props = data.body;
      res.render("Albums", props);
    })
    .catch((err) => console.log("album searching error", err));
});

app.get("/album-tracks/:tracksId", (req, res, next) => {
  spotifyApi.getAlbumTracks(req.params.tracksId).then((data) => {
    const props = data.body;
    res.render("Tracks", props);
  });
});

app.listen(PORT, () =>
  console.log(`My Spotify project running on port ${PORT} 🎧 🥁 🎸 🔊`)
);
