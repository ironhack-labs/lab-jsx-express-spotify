const React = require("react");
const Layout = require("./Layout");

function Home() {
  return (
    <Layout>
      <div className="header">
        <div className="form-container">
          <form action="/artist-search" method="GET">
            <input type="text" name="artistName" placeholder="Search" />
            <button type="submit">Search for an Artist</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Home;
