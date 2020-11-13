const React = require("react");

function Albums(props) {
  const albumsArray = props.items;

  return (
    <div>
      {albumsArray.map((item, index) => {
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
            <a href={`/album-tracks/${item.id}`}>view tracks</a>
          </div>
        );
      })}
    </div>
  );
}

module.exports = Albums;
