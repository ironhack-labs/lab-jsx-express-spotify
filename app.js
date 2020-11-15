require("dotenv").config();
const express = require("express");
const erv = require("express-react-views");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const SpotifyWebApi = require("spotify-web-api-node");
// require spotify-web-api-node package here:
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
const app = express();
const PORT = 9000;
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
// Our routes go here:
// ROUTES
// render the search form
app.get("/", (req,res,next)=>{
  res.render("Homepage")
})
app.get("/artist-search", (req,res,next) =>{
  //console.log("req", req.query)
  //req.query: {search: Adele}
  const searchArtist = req.query.search
  spotifyApi
  .searchArtists(searchArtist)
  .then((data) => {
    //console.log("The received data from the API: ", data.body);
    console.log("The received data from the API: ", data.body.artists.items);
    //console.log("The received data from the API: ", data.body.artists.items[0].id);

    //console.log("---------------->: ", data.body.artists.items[0].name);
    // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE data FROM THE API'
    res.render("ArtistSearchResult", data)
  })
  .catch((err) =>
    console.log("The error while searching artists occurred: ", err)
  );
  // console.log("req.query", req.query);
  // res.send();
})


// Route for getting albums from a certain artist by the artistID 
// example: artist ID 43ZHCT0cAZBISjO8DG9PnE --> you get all the albums from Elvis
app.get("/albums/:artistId", (req, res, next) => {
  spotifyApi
  .getArtistAlbums(req.params.artistId)
  .then((data)=>{
  //console.log("req.params", req.params);
  console.log("Albums from the artist", data.body);
  res.render("Albums", data);
  }
);
})

app.get("/tracks/:albumsId", (req,res,next) =>{
  spotifyApi
  .getAlbumTracks(req.params.albumsId, { limit : 5, offset : 1 })
  .then((data)=>{
    //console.log("Tracks", data.body); 
    //console.log("Tracks", data.body.items[0].artists); 

    res.render("Tracks", data); 
  })
})

app.get("/users/:holadiewaldfee", (req,res,next)=>{
  console.log("req.params", req.params);
  console.log("req.params.holadiewaldfee", req.params.holadiewaldfee)
  res.send();
})

app.listen(PORT, () =>
  console.log(`My Spotify project running on port ${PORT} :headphones: :drum_with_drumsticks: :guitar: :loud_sound:`))