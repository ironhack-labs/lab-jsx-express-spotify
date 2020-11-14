const React = require("react");
const Layout = require("./layout");

function ArtistSearchResult(props) {
  const artistsArray = props.artists.items;
  const twoArtists = [artistsArray[0], artistsArray[1]];

  return (
    <Layout>
      <div className="artistdiv">
        <h1 id="artisttitle">Tus últimas tendencias</h1>
        {twoArtists.map((item, index) => {
          return (
            <div className="artistcontainer" key={index}>
              <div className="artistinnercontainer">
                <div className="pointlessname">
                  <p>ARTIST MOST LISTENED</p>
                </div>
                <div className="artistname">
                  <h3>{item.name}</h3>
                  {item.images.length != 0 ? (
                    <img
                      src={item.images[0].url}
                      height="280px"
                      width="280px"
                      alt=""
                    />
                  ) : (
                    <img
                      src="/images/bjork.jpg"
                      height="280px"
                      width="280px"
                    ></img>
                  )}
                </div>
                <a href={`/albums/${item.id}`}>view albums</a>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

module.exports = ArtistSearchResult;
