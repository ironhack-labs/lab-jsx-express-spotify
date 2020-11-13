const React = require("react");

function Tracks(props) {
  const tracksArray = props.items;

  return (
    <div>
      {tracksArray.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <audio controls>
              <source src={item.preview_url} type="audio/mp3" />
            </audio>
          </div>
        );
      })}
    </div>
  );
}

module.exports = Tracks;
