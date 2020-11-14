const React = require("react");

function Album(props) {
  return (
    <div>
      {props.artistAlbums.map((album, i) => {
        return (
          <div key={i}>
            <p>{album.name}</p>
            {
            album.images.length === 0 
            ? null 
            : (<img src={album.images[0].url} />)
            }
            <br/>
            <a href={`/${album.id}`}>View Tracks</a>
          </div>
        );
      })}
    </div>
  );
}

module.exports = Album;
