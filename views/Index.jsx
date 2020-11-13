const Express = require("express");
const React = require("react");

function Index() {
  return (
    <form action="/artist-search">
      <input type="text" name="artist" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

module.exports = Index;
