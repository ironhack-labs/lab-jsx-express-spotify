
const React = require('react');
const Layout = require('./Layout');

function Home() {
    return (
        <Layout>

          <h1>Home</h1>
          <form action="/artist-search" method="GET">
              <input type="text" name="artist" placeholder="Search for an Artist"/>
              <input type="submit" value = "Search"/>
          </form>
        
        </Layout>
        
      );
      
}
module.exports = Home;