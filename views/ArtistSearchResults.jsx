const React = require("react");
const Layout = require("./Layout");

function ArtistSearchResults(props) {
  //   console.log("THIS IS THE PROPOPOPOPO:", props.data.body.artists.items[2].);
  return (
    <Layout>
      <div className="search-grid-center">
        <h2>Search Results</h2>
        <div className="search-grid">
          {props.data.body.artists.items.map((results, i) => {
            return (
              <div key={i} className="search-card card">
                {results.images.length === 0 ? (
                  <img
                    className="search-img img-card-top"
                    src={
                      "https://store-images.s-microsoft.com/image/apps.52691.13571498826857201.5bda3835-53b1-4825-ba61-ae335fbbbdd8.2995406a-229c-4a24-ae8a-39af0e795554"
                    }
                  />
                ) : (
                  <img
                    className="search-img img-card-top"
                    src={results.images[0].url}
                  />
                )}

                <h5 className="card-title">{results.name}</h5>
                <a href={`/albums/${results.id}`} className="btn btn-info">
                  View Albums
                </a>
              </div>
            );
          })}

          {/* {props.data.map((home) => {
          <div>{home.href}</div>;
        })} */}
        </div>
      </div>
    </Layout>
  );
}

module.exports = ArtistSearchResults;
