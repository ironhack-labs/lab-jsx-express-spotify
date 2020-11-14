const React = require("react");
const Layout = require("./Layout");

function Tracks(props) {
  //   console.log(
  //     props.data.body.items[0].name,
  //     props.data.body.items[1].name,
  //     props.data.body.items[2].name
  //   );
  return (
    <Layout>
      <div>
        <div className="track-list">
          {props.data.body.items.map((results, i) => {
            return (
              <div key={i} className="track">
                <p className="list-group-item">
                  {i + 1}. {results.name}{" "}
                </p>
                <audio controls src={results.preview_url}>
                  Play audio
                </audio>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

module.exports = Tracks;
