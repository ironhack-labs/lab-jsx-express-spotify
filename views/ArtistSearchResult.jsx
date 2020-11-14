const React = require("react");

function ArtistSearchResult(props) {
  return (
    <div>
      {props.artistArr.map((artist, i) => {
        //console.log(artist.images[0].url);
        return (
          <div key={i}>
            <p>{artist.name}</p>
            {artist.images.length === 0 
            ? null 
            : (<img src={artist.images[0].url} />)}

            <br/>
            <a href={`/albums/${artist.id}`}>View Albums</a>

          </div>
        );
      })}
    </div>
  );
}

module.exports = ArtistSearchResult;
