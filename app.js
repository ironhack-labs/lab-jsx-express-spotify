require("dotenv").config();
const SpotifyWebApi = require("spotify-web-api-node");


const express = require("express");
const erv = require("express-react-views");
const bodyParser = require("body-parser");
const morgan = require("morgan");

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

// ITERATION 1

app.get('/home', (req, res, next) => {
  res.render('Home');
})

// Receive the data from the search form ( "form GET" ) 
app.get('/artist-search', (req, res, next) => {
  console.log("req.query", req.query);
  


// ITERATION 3
const searchedArtist = req.query.search;

spotifyApi
  .searchArtists(searchedArtist)
  
  .then((data) => {
    console.log("The received data from the API: ", data.body);
    // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
    console.log("data body :", data.body.artists.items)
    const searchedArtistFromForm = data.body;
    //console.log("The searched artist:", searchedArtist);
    
    res.render('ArtistSearchResult', searchedArtistFromForm);
  })
  .catch((err) =>

  console.log("The error while searching artists occurred: ", err)
);
});

  // ITERATION 4

// Receive the data from the album button ( "form GET" ) 
app.get("/albums/:artistId", (req, res, next) => {
  console.log("req.params", req.params);

  spotifyApi
    .getArtistAlbums(req.params.artistId)
    .then((data) => {
      console.log("The received data from the API: ", data.body);
      res.render("Albums", data.body);
      // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
    })
    .catch((err) =>
      console.log("The error while searching artists occurred: ", err)
    );
});

// ITERATION 5

app.get("/tracks/:albumId", (req, res, next) => {
  console.log("req.params", req.params);

  spotifyApi
    .getAlbumTracks(req.params.albumId)
    .then((data) => {
      console.log("The received data from the API: ", data.body);
      res.render("Tracks", data.body);
      // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
    })
    .catch((err) =>
      console.log("The error while searching tracks occurred: ", err)
    );
});




app.listen(PORT, () =>
  console.log(`My Spotify project running on port ${PORT} 🎧 🥁 🎸 🔊`)
);
