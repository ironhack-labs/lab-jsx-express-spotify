require("dotenv").config();

const express = require("express");
const erv = require("express-react-views");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// require spotify-web-api-node package here:
const SpotifyWebApi = require("spotify-web-api-node");

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

// home route
app.get("/", (req, res, next) => {
  res.render("Home");
});

// form route
app.get("/artist-search", (req, res, next) => {
  spotifyApi
    .searchArtists(req.query.artistName)
    .then((data) => {
      console.log("The received data from the API: ", data.body.artists.items);
      // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
      const props = { data: data.body.artists.items };
      res.render("ArtistSearchResult", props);
    })
    .catch((err) =>
      console.log("The error while searching artists occurred: ", err)
    );
});

app.get("/albums/:artistId", (req, res, next) => {
  const id = req.params.artistId;
  spotifyApi.getArtistAlbums(id).then(
    function (data) {
      const albums = { data: data.body.items };
      res.render("Albums", albums);
    },
    function (err) {
      console.log(err);
    }
  );
});

app.get("/albums/:artistId/tracks", (req, res, next) => {
  const id = req.params.artistId;
  spotifyApi.getAlbumTracks(id, { limit: 5, offset: 1 }).then(
    function (data) {
      const tracks = { data: data.body.items };
      res.render("Tracks", tracks);
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
});

app.listen(PORT, () =>
  console.log(`My Spotify project running on port ${PORT} 🎧 🥁 🎸 🔊`)
);
