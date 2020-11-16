//REQUIRE PACKAGES
require("dotenv").config();

const express = require("express");
const erv = require("express-react-views");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// require spotify-web-api-node package here:
const SpotifyWebApi = require("spotify-web-api-node");
const { render } = require("react-dom");

//SETTING UP SPOTIFY
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});
// Retrieve a Spotify access token
spotifyApi
  .clientCredentialsGrant()
  .then((data) => {
    spotifyApi.setAccessToken(data.body["access_token"]);
  })
  .catch((error) =>
    console.log("Something went wrong when retrieving an access token", error)
  );

// CREATE SERVER
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

// ROUTES
app.get("/", (req, res, next) => {
  res.render("Home");
});
app.get("/artist-search/", (req, res, next) => {
  // console.log('req.path', req.path);
  // console.log('req.query', req.query);
  // console.log('req.query.artist', req.query.artist);
  // console.log('req.params', req.params);
  // console.log('req.params.artist', req.params.artist);
  // console.log('req.method', req.method);
  // console.log('req.headers', req.headers);

  const queriedArtist = req.query.artist;
  spotifyApi
    .searchArtists(queriedArtist)
    .then((data) => {
      //console.log("The received data from the API: ", data.body);
      //console.log("Cherry Picked [0] name: ", data.body.artists.items[0].name);
      //console.log("Cherry Picked [0] image [0] URL: ", data.body.artists.items[0].images[0].url);
      res.render("ArtistSearchResult", data);
    })
    .catch((err) =>
      console.log("The error while searching artists occurred: ", err)
    );
});
app.get("/albums/:artistId", (req, res, next) => {
  //console.log(">>>>>>>>>>>>>>>> req.params.artistId", req.params.artistId);
  spotifyApi
    .getArtistAlbums(req.params.artistId)
    .then((data) => {
      //console.log("freshly brewed Albums data from Spotify:"+data.body.items[0].name);
      res.render("Albums", data);
    })
    .catch((err) => {
      console.log("The error while searching albums occurred: ", err);
    });
});
app.get("/tracks/:albumId", (req, res, next) => {
  spotifyApi
    .getAlbumTracks(req.params.albumId)
    .then((data) => {
      res.render("Tracks", data);
    })
    .catch((err) => {
      console.log("The error while searching tracks occurred: ", err);
    });
});

//
app.listen(PORT, () =>
  console.log(`My Spotify project running on port ${PORT} 🎧 🥁 🎸 🔊`)
);
