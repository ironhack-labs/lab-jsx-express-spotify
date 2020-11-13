const React = require("react");

function ArtistSearchResult(props) {
  const artistsArray = props.artists.items;

  return (
    <div>
      {artistsArray.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            {item.images.length != 0 ? (
              <img
                src={item.images[0].url}
                height="100px"
                width="100px"
                alt=""
              />
            ) : null}
            <a href={`/albums/${item.id}`}>view albums</a>
          </div>
        );
      })}
    </div>
  );
}

module.exports = ArtistSearchResult;
