const React = require("react");

function ArtistCard(props) {
  console.log("WORKING");
  return (
    <div className="search-grid-center">
      <h2>Search Results</h2>
      <div className="search-grid">
        {props.artist.body.artists.items.map((results, i) => {
          return (
            <div key={i} className="search-card card">
              {results.images.length === 0 ? (
                <img
                  className="search-img img-card-top"
                  src={
                    "https://pbs.twimg.com/profile_images/756512919236608000/x9a1WKOg_400x400.jpg"
                  }
                  alt="no image"
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
      </div>
    </div>
  );
}

module.exports = ArtistCard;
