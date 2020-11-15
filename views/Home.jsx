const React = require("react");
const Layout = require("./Layout");

function Home() {
  return (
    <Layout>
      <section>
        <div id="white-box">
          <form action="/artist-search" method="GET">
            <input
              type="text"
              name="searchRequest"
              placeholder="Ex.: Iwrestledabearonce"
            />
            <button type="submit" value="Search">
              Search
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

module.exports = Home;
