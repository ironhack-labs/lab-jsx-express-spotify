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

// ROUTES
app.get('/Search', (req, res, next) => {
  res.render('Search');
});
app.get('/artist-search', (req, res, next) => {
  //console.log(req.query);
  spotifyApi
.searchArtists(req.query.artistSearch)
  .then((data) => {
    //console.log(data.body.artists)
    res.render('ArtistSearchResult', data.body.artists);
  })
  .catch((err) =>
    console.log("Error while searching artists occurred: ", err)
  );
})

app.get('/albums/:artistId', (req, res) => {
  spotifyApi
    .getArtistAlbums(req.params.artistId)
    .then((data) => {
      res.render('Albums', data.body);
    })
    .catch((err) => console.log('Error while searching album occurred: ', err));
});

app.get('/tracks/:', (req, res) => {
  spotifyApi.getAlbumTracks(req.params.albumId)
  .then((data) => {
    console.log(data.body)
    res.render('Tracks', data.body)
  })
  .catch((err) => console.log('Error while playing track occurred: ', err));
})
app.listen(PORT, () =>
  console.log(`My Spotify project running on port ${PORT} 🎧 🥁 🎸 🔊`)
);