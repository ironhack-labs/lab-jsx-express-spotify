const React = require("react");
function Layout() {
  return (
    <form action="/artist-search" method="GET">
      <input type="text" name="search" placeholder="Look for..." /> <br />{" "}
      <button type="submit">Search for an Artist</button>{" "}
    </form>
  );
}
module.exports = Layout;
