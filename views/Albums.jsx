const React = require("react");
const Layout = require("./Layout");

function Albums(props) {
  return (
    <Layout>
      <div class="result-container">
        {props.data.map((album, i) => {
          return (
            <div class="result-card" key={i}>
              <h1>{album.name}</h1>
              <img
                class="cover-picture"
                src={album.images.length === 0 ? null : album.images[0].url}
              />
              <button>
                <a href={`/tracks/${album.id}`}>View Tracks</a>
              </button>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

module.exports = Albums;
