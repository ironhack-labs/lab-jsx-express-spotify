const React = require("react");
const Layout = require("./Layout");

function Tracks(props) {
  return (
    <Layout>
      <div>
        <div className="top-bar">
          <h2>Title</h2>
          <h2>Listen</h2>
        </div>
        {props.data.map((prop, i) => {
          return (
            <div>
              <figure key={i}>
                <figcaption>Listen to {prop.name}</figcaption>
                <audio controls src={`${prop.preview_url}`}></audio>
              </figure>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

module.exports = Tracks;
