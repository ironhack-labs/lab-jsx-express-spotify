require("dotenv").config();

const express = require("express");
const erv = require("express-react-views");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const SpotifyWebApi = require("spotify-web-api-node");

// require spotify-web-api-node package here:

const app = express();
const PORT = 3000;

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
    console.log("Something went wrong when retrieving an access token", error)
  );

// Our routes go here:
// ROUTES

app.get("/Home", (req, res, next) => {
  res.render("Home");
});

app.get("/artist-search", (req, res, next) => {
  spotifyApi
    .searchArtists(req.query.search)
    .then((data) => {
      // console.log(
      //   "The received data from the API: ",
      //   data.body.artists.items[0],
      //   data.body.artists.items[0].images[0]
      //);
      // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'

      const dataObj = { data: data };
      res.render("ArtistSearchResults", dataObj);
    })
    .catch((err) =>
      console.log("The error while searching artists occurred: ", err)
    );
});

app.get("/ArtistSearchResults", (req, res, next) => {
  res.render("ArtistSearchResults");
});

app.get("/albums/:artistId", (req, res, next) => {
  //console.log("artistId:", req.params.artistId);
  spotifyApi
    .getArtistAlbums(req.params.artistId)
    .then((data) => {
      // console.log("Artist albums", data.body.items[0]);
      const dataObj = { data: data };
      res.render("Albums", dataObj);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/tracks/:albumId/album/:albumName", (req, res, next) => {
  //console.log("artistId:", req.params.artistId);
  spotifyApi
    .getAlbumTracks(req.params.albumId)
    .then((data) => {
      console.log("Albums tracks", data.body.items[0]);
      const dataObj = { data: data, albumName: req.params.albumName };

      res.render("Tracks", dataObj);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, () =>
  console.log(`My Spotify project running on port ${PORT} 🎧 🥁 🎸 🔊`)
);
