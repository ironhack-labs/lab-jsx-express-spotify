const React = require('react');

function Home(){
return (
    <form action= "/artist-search" method="GET">
    <input type="text" name="search" placeholder="artist name" />
    <br />

    <button type="submit">Search</button>
  </form>
);
}

module.exports = Home;