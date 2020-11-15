require("dotenv").config();

const express = require("express");
const erv = require("express-react-views");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const SpotifyWebApi = require("spotify-web-api-node");

const { request } = require("express");

const app = express();
const PORT = 3000;

// Retrieve an access token
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

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
spotifyApi
  .clientCredentialsGrant()
  .then((data) => spotifyApi.setAccessToken(data.body["access_token"]))
  .catch((error) =>
    console.log("Something went wrong when retrieving an access token", error)
  );

// Our routes go here:
// ROUTES

app.get("/", (req, res, next) => {
  console.log("get request works");
  res.render("Home");
});

app.get("/artist-search", (req, res, next) => {
  const artistName = req.query.searchRequest;
  console.log("ARTIST NAME: ", artistName);

  spotifyApi
    .searchArtists(artistName)
    .then((data) => {
      console.log("The received data from the API: ", data.body.artists.items);
      console.log("IMAGES_ARRAY: ", data.body.artists.items[0].images);
      // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
      const props = { data: data.body.artists.items };
      res.render("ArtistSearchResult", props);
    })
    .catch((err) =>
      console.log("The error while searching artists occurred: ", err)
    );
});

app.get("/albums/:artistId", (req, res, next) => {
  const artistId = req.params.artistId;
  console.log("ARTIST ID HERE:", artistId);

  // .getArtistAlbums() code goes here
  spotifyApi
    .getArtistAlbums(artistId)
    .then((data) => {
      const props = { data: data.body.items };
      console.log("ALBUM : ", props.data[0]);
      res.render("Albums", props);
    })
    .catch((err) => {
      console.log("The error while getting the albums occured: ", err);
    });
});

app.get("/tracks/:albumId", (req, res, next) => {
  const albumId = req.params.albumId;
  console.log("ALBUM ID HERE:", albumId);

  spotifyApi.getAlbumTracks(albumId).then((data) => {
    console.log("TRACKS_DATA:", data.body.items);
    const props = { data: data.body.items };
    res.render("Tracks", props);
  });
});

app.listen(PORT, () =>
  console.log(`My Spotify project running on port ${PORT} 🎧 🥁 🎸 🔊`)
);
