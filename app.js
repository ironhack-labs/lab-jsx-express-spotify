require("dotenv").config();
const express = require("express");
const erv = require("express-react-views");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// require spotify-web-api-node package here:
const SpotifyWebApi = require("spotify-web-api-node");

// Retrieve an access token
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

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
spotifyApi
  .clientCredentialsGrant()
  .then((data) => spotifyApi.setAccessToken(data.body["access_token"]))
  .catch((error) =>
    console.log("Something went wrong when retrieving an access token", error)
  );

// ROUTES
app.get("/", (req,res,next)=>{
  res.render("Homepage")
})

app.get("/artist-search", (req,res,next) =>{
  const searchArtist = req.query.search
  spotifyApi
  .searchArtists(searchArtist)
  .then((data) => {
    // console.log("---------------->: ", data.body.artists.items[0].images[0].url);
    res.render("ArtistSearchResult", data)
  })
  .catch((err) =>
  console.log("The error while searching artists occurred: ", err)
  );
})

app.get("/artist/:artistId", (req,res,next) =>{
  
  const idArtist = req.params.artistId
  // console.log("idArtist ", idArtist )
  spotifyApi
  .getArtistAlbums(idArtist)
  .then((data) => {
    // console.log("---------------->: ", data.body.items[0]);
      res.render("Albums",  data.body)
  })
  .catch ((err) => console.error(err))
  
})


app.get("/album/:albumId", (req,res,next) =>{
  
  const idAlbum = req.params.albumId
  // console.log("idAlbum -----", idAlbum )
  spotifyApi
  .getAlbumTracks(idAlbum)
  .then((data) => {
    // console.log("---------------->: ", data.body);
      res.render("Tracks",  data.body)
  })
  .catch ((err) => console.error(err))
  
})


app.listen(PORT, () =>
  console.log(`My Spotify project running on port ${PORT} :headphones: :drum_with_drumsticks: :guitar: :loud_sound:`)
)