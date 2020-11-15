const React = require('react');
const Layout = require('./layout');

function Home(){
return (
    <Layout>
    <form action= "/artist-search" method="GET">
    <input type="text" name="search" placeholder="artist name" />
    <br />

    <button type="submit">Search</button>
  </form>
  </Layout>
);
}

module.exports = Home;