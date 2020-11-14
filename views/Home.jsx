const React = require("react");
const Layout = require("./Layout");

function Home() {
  return (
    <Layout>
      <div className="input-form">
        <h1>Search An Artist</h1>
        <form action="/artist-search" method="GET">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="search"
              placeholder="Look for..."
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Home;
