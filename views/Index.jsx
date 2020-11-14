const Express = require("express");
const React = require("react");
const Layout = require("./Layout");

function Index() {
  return (
    <Layout>
      <div id="home-container">
        <div id="form-div">
          <form action="/artist-search" method="get">
            <input type="text" name="artist" />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Index;
