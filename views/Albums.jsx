const React = require("react");
const Layout = require("./Layout");

function Albums(props) {
  return (
    <Layout>
      <div className="artist-search">
        {props.data.map((prop, i) => {
          return (
            <div className="artist" key={i}>
              {prop.images.length === 0 ? null : (
                <img src={`${prop.images[1].url}`} />
              )}
              <div className="artist-name">
                <h2>{prop.name}</h2>
                <a href={`/albums/${prop.id}/tracks`}>View Tracks</a>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

module.exports = Albums;
