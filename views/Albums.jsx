const React = require("react");

function Albums(props) {
  return (
    <div>
      {props.data.map((album, i) => {
        return (
          <div key={i}>
            <h1>{album.name}</h1>
            <img src={album.images.length === 0 ? null : album.images[0].url} />
            <button>
              <a href={`/tracks/${album.id}`}>View Tracks</a>
            </button>
          </div>
        );
      })}
    </div>
  );
}

module.exports = Albums;
