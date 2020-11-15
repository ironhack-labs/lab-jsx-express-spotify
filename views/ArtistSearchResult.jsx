const React = require("react");

function ArtistSearchResult(props) {
  return (
    <div>
      {props.data.map((searchResObj, i) => {
        return (
          <div key={i}>
            <img
              src={
                searchResObj.images.length === 0
                  ? null
                  : searchResObj.images[0].url
              }
              alt=""
              height="500px"
              width="300px"
            />
            <h2>{searchResObj.name}</h2>
            <a href={`/albums/${searchResObj.id}`}>View Albums</a>
          </div>
        );
      })}
    </div>
  );
}

module.exports = ArtistSearchResult;
