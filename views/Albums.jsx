const React = require("react");
const Layout = require("./Layout");

function Albums(props) {
  return (
    <Layout>
      <div className="search-grid-center">
        <h1>Albums By {props.data.body.items[0].artists[0].name}</h1>
        <div className="search-grid">
          {props.data.body.items.map((results, i) => {
            return (
              <div key={i} className="search-card card">
                <img
                  className="search-img img-card-top"
                  src={results.images[0].url}
                ></img>
                <h5 className="card-title">{results.name}</h5>

                <a href={`/tracks/${results.id}`} className="btn btn-info">
                  View Tracks
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

module.exports = Albums;
