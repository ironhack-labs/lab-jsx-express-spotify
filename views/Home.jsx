const React = require("react");

function Home() {
  return (
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
  );
}

module.exports = Home;
