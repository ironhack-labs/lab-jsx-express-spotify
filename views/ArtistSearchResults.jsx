const React = require("react");
const Layout = require("./Layout");
const ArtistCard = require("./components/ArtistCard");

function ArtistSearchResults(props) {
  //   console.log("THIS IS THE PROPOPOPOPO:", props.data.body.artists.items[2].);
  return (
    <Layout>
      <ArtistCard artist={props.data}></ArtistCard>
    </Layout>
  );
}

module.exports = ArtistSearchResults;
