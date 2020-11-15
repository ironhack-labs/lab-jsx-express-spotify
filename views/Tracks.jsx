const React = require("react");
const Layout = require("./Layout");

function Tracks(props) {
  //   console.log(
  //     props.data.body.items[0].name,
  //     props.data.body.items[1].name,
  //     props.data.body.items[2].name
  //   );

  const style = {
    background: `url(${props.img})`,
    backgroundSize: "cover",
  };

  return (
    <Layout>
      <div>
        <div style={style} className="track-list">
          <div className="album-title">
            <h1>{props.albumName}</h1>
          </div>
          {props.data.body.items.map((results, i) => {
            return (
              <div>
                <div key={i} className="track">
                  <p className="list-group-item">
                    {i + 1}. {results.name}{" "}
                  </p>
                  {results.preview_url == null ? (
                    <p className="list-group-item">
                      Sorry No Preview Available
                    </p>
                  ) : (
                    <audio controls src={results.preview_url}>
                      Play audio
                    </audio>
                  )}
                  <div>
                    <a
                      className="btn btn-light"
                      href={results.external_urls.spotify}
                    >
                      Link To Full Song
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

module.exports = Tracks;
