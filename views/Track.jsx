const React = require("react");

function Track(props) {
  return (
    <div>
      {props.trackArr.map((track, i) => {
        return (
          <div key={i}>
            <span>{track.name}</span>
            <audio controls src={track.preview_url}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </div>
        );
      })}
    </div>
  );
}

module.exports = Track;
