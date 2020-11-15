
const React = require('react');
const Layout = require('./Layout');

function Home() {
    return (
        <Layout>

          <div id="home">
            <form action="/artist-search" method="GET">
                <input id="form-input" type="text" name="artist" placeholder="Search for an Artist"/>
                <input id="form-button" type="submit" value = "Search artists"/>
            </form>
          </div>
        
        </Layout>
        
      );
      
}
module.exports = Home;